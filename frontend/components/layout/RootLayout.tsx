import React, { FC, useEffect, useState } from "react"
import { styled } from "styled-components"
import { Outlet } from "react-router-dom"
import { Nav, Footer } from "./_index"
import { Principal } from "@dfinity/principal"
import { AnonymousIdentity, HttpAgent, Actor } from "@dfinity/agent"
import { idlFactory } from "../../idl/icrc1_ledger"
import { _SERVICE } from "../../idl/icrc1_ledger_types"
import { HOST_IC, TOKEN_LEDGER_ID } from "../../constants/_index"

// hooks
import { useToken } from "../../hooks/_index"

// state
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux"
import { selectTheme, setTheme } from "../../state/theme"

const RootLayout: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { refreshMetadata, refreshTransactions } = useToken()
  const [token, setToken] = useState<_SERVICE>()
  const theme = useAppSelector(selectTheme)

  const initLedger = async (): Promise<void> => {
    const agentOptions = {
      identity: new AnonymousIdentity(),
      host: HOST_IC,
    }
    const agent = new HttpAgent(agentOptions)

    setToken(
      Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText(TOKEN_LEDGER_ID),
      }),
    )
  }

  useEffect(() => {
    initLedger()
  }, [])

  useEffect(() => {
    if (!token) return
    refreshMetadata(token)
    refreshTransactions(token)
  }, [token])

  // theme

  useEffect(() => {
    const thm = JSON.parse(localStorage.getItem("theme"))
    console.log(thm)
    if (thm) {
      dispatch(setTheme(thm))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <RootLayoutStyled className={theme === "" ? "dark" : theme}>
      <Nav />
      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </RootLayoutStyled>
  )
}

const RootLayoutStyled = styled.div`
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

export default RootLayout
