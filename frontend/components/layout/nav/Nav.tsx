import React, { FC } from "react"
import { styled } from "styled-components"
import {
  PROJECT_NAME,
  WHITEPAPER_URL,
  SCAN_URL,
  ICPSWAP_LP_STATS_URL,
} from "@/constants/_index"
import { NavLink } from "react-router-dom"
import { iExternalLink } from "@/components/icons/Icons"

const Nav: FC = (): JSX.Element => {
  return (
    <NavStyled>
      <div className="nav_items">
        <NavLink className="logo" to="/">
          <h1>{PROJECT_NAME}</h1>
        </NavLink>
        <NavLink to="/snapshot">Snapshot</NavLink>
        {/* <NavLink to="/og_claim">OG Claim</NavLink> */}

        <a
          className="link"
          href={ICPSWAP_LP_STATS_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          ICPSwap LP Stats <span>{iExternalLink}</span>
        </a>

        <a
          className="link"
          href={WHITEPAPER_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Whitepaper {iExternalLink}
        </a>

        <a
          className="link"
          href={SCAN_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Scan {iExternalLink}
        </a>
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  > div.nav_items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    > a {
      font-size: var(--fs7);
    }

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
