import React from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// components
import RootLayout from "../components/layout/RootLayout"
import { Home, Scan } from "../pages/_index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="scan">
        <Route index element={<Scan />} />
      </Route>
    </Route>,
  ),
)

export default router
