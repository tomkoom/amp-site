import React, { FC, useEffect } from "react"
import { Home } from "./pages/_index"
import { styled } from "styled-components"
// import * as counter from "../.dfx/local/canisters/backend"

// state
import { useAppSelector, useAppDispatch } from "./hooks/useRedux"
import { selectTheme, setTheme } from "./state/theme"

const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

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
    <AppStyled className={theme === "" ? "dark" : theme}>
      <Home />
    </AppStyled>
  )
}

const AppStyled = styled.div``

export default () => <App />
