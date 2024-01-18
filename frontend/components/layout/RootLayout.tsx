import React, { FC, useEffect } from "react"
import { styled } from "styled-components"
import { Outlet } from "react-router-dom"
import { Footer, Nav } from "./_index"

// state
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux"
import { selectTheme, setTheme } from "../../state/theme"

const RootLayout: FC = (): JSX.Element => {
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
  background-color: var(--background);
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
