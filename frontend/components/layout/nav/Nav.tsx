import React, { FC } from "react"
import { styled } from "styled-components"
import { PROJECT_NAME, CANDID_URL, SCAN_URL } from "../../../constants/_index"
import { NavLink } from "react-router-dom"

// state
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux"
import { setTheme, selectTheme } from "../../../state/theme"

const Nav: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const changeTheme = (): void => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"))
  }

  return (
    <NavStyled>
      <div className="nav_items">
        <NavLink to="/">
          <h1>{PROJECT_NAME}</h1>
        </NavLink>

        {/* <NavLink to="/scan">scan</NavLink> */}
        <a href={CANDID_URL} target="_blank" rel="noreferrer noopener">
          candid
        </a>

        <a href={SCAN_URL} target="_blank" rel="noreferrer noopener">
          scan
        </a>
      </div>

      <button onClick={changeTheme}>
        <span
          style={theme === "light" ? { textDecoration: "underline" } : null}
        >
          light
        </span>
        /
        <span
          style={
            theme === "dark" || theme === ""
              ? { textDecoration: "underline" }
              : null
          }
        >
          dark
        </span>
      </button>
    </NavStyled>
  )
}

const NavStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;

  * {
    font-size: var(--fs6);
  }

  > div.nav_items {
    display: flex;
    align-items: center;
    gap: 1rem;

    > span {
      cursor: pointer;
    }
  }
`

export default Nav
