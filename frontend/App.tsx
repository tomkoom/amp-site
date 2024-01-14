import React, { FC } from "react"
import { Home } from "./pages/_index"
import { styled } from "styled-components"
// import * as counter from "../.dfx/local/canisters/backend"

// state
import { useAppSelector } from "./hooks/useRedux"
import { selectTheme } from "./state/theme"

const App: FC = (): JSX.Element => {
  const theme = useAppSelector(selectTheme)

  return (
    <AppStyled className={theme}>
      <Home />
    </AppStyled>
  )
}

const AppStyled = styled.div``

export default () => <App />
