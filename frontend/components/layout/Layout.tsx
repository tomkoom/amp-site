import React, { FC, useEffect, useState } from "react"
import { styled } from "styled-components"
import { Outlet } from "react-router-dom"
import { Nav, Footer } from "./_index"
import { Principal } from "@dfinity/principal"
import { AnonymousIdentity, HttpAgent, Actor } from "@dfinity/agent"
import { idlFactory } from "../../idl/icrc1_ledger"
import { _SERVICE } from "../../idl/icrc1_ledger_types"
import { HOST_IC, LEDGER_ID } from "../../constants/_index"
import { useToken, useDiscord } from "@/hooks/_index"

const Layout: FC = (): JSX.Element => {
  const theme = "dark"
  const { refreshMetadata, refreshCanisterBalances, refreshTransactions } =
    useToken()
  // const { refreshDiscordSession } = useDiscord()
  const [token, setToken] = useState<_SERVICE>()

  const initLedger = async (): Promise<void> => {
    const agentOptions = {
      identity: new AnonymousIdentity(),
      host: HOST_IC,
    }
    const agent = new HttpAgent(agentOptions)

    setToken(
      Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText(LEDGER_ID),
      }),
    )
  }

  useEffect(() => {
    initLedger()
  }, [])

  // useEffect(() => {
  //   refreshDiscordSession()
  // }, [])

  const setTokenData = async (): Promise<void> => {
    try {
      await refreshMetadata(token)
      await refreshCanisterBalances(token)
      // await refreshTransactions(token)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    if (!token) return
    setTokenData()
  }, [token])

  return (
    <LayoutStyled className={theme}>
      <Nav />
      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primaryColor);
  background-color: var(--black);
  padding: 1rem;

  /* footer at the bottom */
  min-height: 100vh;

  > main.main {
    margin: 1rem 0;

    /* footer at the bottom */
    flex-grow: 1;
  }
`

export default Layout
