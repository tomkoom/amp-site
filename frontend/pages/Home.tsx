import React, { FC, useState, useEffect } from "react"
import { styled } from "styled-components"
import { Principal } from "@dfinity/principal"
import { AnonymousIdentity, HttpAgent, Actor } from "@dfinity/agent"
import { idlFactory } from "../idl/icrc1_ledger"
import { _SERVICE } from "../idl/icrc1_ledger_types"
import { HOST_IC, MY_LEDGER_CANISTER_ID } from "../constants/_index"
import { Metadata } from "./_index"

export interface Metadata {
  name: string
  symbol: string
  fee: number
  total_supply: number
}

const Home: FC = (): JSX.Element => {
  const [token, setToken] = useState<_SERVICE>()
  const [metadata, setMetadata] = useState<Metadata>()

  const initLedger = async (): Promise<void> => {
    const agentOptions = {
      identity: new AnonymousIdentity(),
      host: HOST_IC,
    }
    const agent = new HttpAgent(agentOptions)

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
      total_supply: 0,
    }
    await token.icrc1_name().then((res) => (metadata.name = res))
    await token.icrc1_symbol().then((res) => (metadata.symbol = res))
    await token.icrc1_fee().then((res) => (metadata.fee = Number(res)))
    await token
      .icrc1_total_supply()
      .then((res) => (metadata.total_supply = Number(res)))
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
    <HomeStyled>
      <a
        href="fq7md-ayaaa-aaaag-abpea-cai"
        target="_blank"
        rel="noreferrer noopener"
      >
        a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=fq7md-ayaaa-aaaag-abpea-cai
      </a>
      <Metadata metadata={metadata} />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  > a {
    display: inline-block;
    margin-bottom: 1rem;
  }
`

export default Home
