import React, { FC } from "react"
import { styled } from "styled-components"
import { PROJECT_NAME, WHITEPAPER_URL, SCAN_URL } from "@/constants/_index"
import { NavLink } from "react-router-dom"

const Nav: FC = (): JSX.Element => {
  return (
    <NavStyled>
      <div className="nav_items">
        <NavLink className="logo" to="/">
          <h1>{PROJECT_NAME}</h1>
        </NavLink>

        <a
          className="link"
          href={WHITEPAPER_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Lightpaper
        </a>

        <NavLink to="/snapshot">Snapshot</NavLink>

        <a
          className="link"
          href={SCAN_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Scan
        </a>

        <NavLink to="/og_claim">Claim</NavLink>
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  * {
    font-size: var(--fs6);
  }

  > div.nav_items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    > a:not(.logo) {
      color: var(--secondaryColor);
      transition: var(--transition1);

      &:hover {
        color: var(--primaryColor);
      }
    }
  }
`

export default Nav
