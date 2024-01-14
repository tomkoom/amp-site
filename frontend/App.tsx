import React, { FC } from "react"
import { Home } from "./pages/_index"
import { styled } from "styled-components"
// import * as counter from "../.dfx/local/canisters/backend"

const App: FC = (): JSX.Element => {
  const theme = "dark"

  return (
    <AppStyled className={theme}>
      <Home />
    </AppStyled>
  )
}

const AppStyled = styled.div``

export default () => <App />
