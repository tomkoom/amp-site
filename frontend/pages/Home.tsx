import React, { FC, useState, useEffect } from "react"
import { styled } from "styled-components"
import { Principal } from "@dfinity/principal"
import { AnonymousIdentity, HttpAgent, Actor } from "@dfinity/agent"
import { idlFactory } from "../idl/icrc1_ledger"
import { _SERVICE } from "../idl/icrc1_ledger_types"
import { HOST_IC, MY_LEDGER_CANISTER_ID } from "../constants/_index"
import { Footer, Header, Metadata } from "./_index"

export interface Metadata {
  name: string
  symbol: string
  fee: number
  decimals: number
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
    const metadata: Metadata = {
      name: "",
      symbol: "",
      fee: 0,
      decimals: 0,
      total_supply: 0,
    }
    await token.icrc1_name().then((res) => (metadata.name = res))
    await token.icrc1_symbol().then((res) => (metadata.symbol = res))
    await token.icrc1_fee().then((res) => (metadata.fee = Number(res)))
    await token.icrc1_decimals().then((res) => (metadata.decimals = res))
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
      <div className="main">
        <Header />
        <Metadata metadata={metadata} />
      </div>

      <Footer />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--primaryColor);
  background-color: var(--background);
  padding: 1rem;

  /* footer at the bottom */
  min-height: 100vh;

  > div.main {
    /* footer at the bottom */
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export default Home
