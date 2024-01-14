import React, { FC } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

// css
import "./styles/main.css"
import "./styles/root.css"
import "./styles/theme.css"

const Main: FC = (): JSX.Element => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container!)
root.render(<Main />)
