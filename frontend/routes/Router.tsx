import React from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// components
import Layout from "../components/layout/Layout"
import { Home, Scan, Snapshot, OgClaim, Ecosystem } from "../pages/_index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="snapshot">
        <Route index element={<Snapshot />} />
      </Route>

      <Route path="og_claim">
        <Route index element={<OgClaim />} />
      </Route>

      <Route path="ecosystem">
        <Route index element={<Ecosystem />} />
      </Route>

      {/* <Route path="scan">
        <Route index element={<Scan />} />
      </Route> */}
    </Route>,
  ),
)

export default router
