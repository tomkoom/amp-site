import React, { FC } from "react"
import { Home } from "./pages/_index"
import { styled } from "styled-components"
// import * as counter from "../.dfx/local/canisters/backend"

const App: FC = (): JSX.Element => {
  const theme = "light"

  return (
    <AppStyled className={theme}>
      <Home />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  padding: 1rem;
`

export default () => <App />
