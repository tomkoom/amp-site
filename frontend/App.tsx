import React, { FC } from "react"
import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/_index"
// import * as counter from "../.dfx/local/canisters/backend"

const App: FC = (): JSX.Element => {
  return <RouterProvider router={Router} />
}

export default () => <App />
