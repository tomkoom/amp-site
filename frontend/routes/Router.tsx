import React from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// components
import RootLayout from "../components/layout/RootLayout"
import { Home, Scan, Snapshot, OgClaim } from "../pages/_index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="snapshot">
        <Route index element={<Snapshot />} />
      </Route>

      {/* <Route path="og_claim">
        <Route index element={<OgClaim />} />
      </Route> */}

      {/* <Route path="scan">
        <Route index element={<Scan />} />
      </Route> */}
    </Route>,
  ),
)

export default router
