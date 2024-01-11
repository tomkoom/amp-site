import React, { FC, useState, useEffect } from "react"
import { Principal } from "@dfinity/principal"
import { AnonymousIdentity, HttpAgent, Actor } from "@dfinity/agent"
import { idlFactory } from "../idl/icrc1_ledger"
import { _SERVICE } from "../idl/icrc1_ledger_types"

interface Metadata {
  name: string
  symbol: string
  fee: number
}

const Home: FC = (): JSX.Element => {
  const [token, setToken] = useState<_SERVICE>()
  const [metadata, setMetadata] = useState<Metadata>()

  const HOST_IC = "https://icp0.io"
  const MY_LEDGER_CANISTER_ID = "fq7md-ayaaa-aaaag-abpea-cai"

  const initLedger = async (): Promise<void> => {
    console.log(new AnonymousIdentity())
    const agentOptions = {
      identity: new AnonymousIdentity(),
      host: HOST_IC,
    }
    const agent = new HttpAgent(agentOptions)
    console.log(agent)

    setToken(
      Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText(MY_LEDGER_CANISTER_ID),
      }),
    )
  }

  const getMetadata = async (): Promise<void> => {
    if (!token) return
    const metadata = {
      name: "",
      symbol: "",
      fee: 0,
    }
    await token.icrc1_name().then((res) => (metadata.name = res))
    await token.icrc1_symbol().then((res) => (metadata.symbol = res))
    await token.icrc1_fee().then((res) => (metadata.fee = Number(res)))
    setMetadata(metadata)
  }

  useEffect(() => {
    initLedger()
  }, [])

  useEffect(() => {
    if (!token) return
    getMetadata()
  }, [token])

  return (
    <div>
      {metadata && (
        <pre>
          <code>{JSON.stringify(metadata, null, 2)}</code>
        </pre>
      )}
    </div>
  )
}

export default Home
