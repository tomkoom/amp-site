import React, { FC } from "react"
import { styled } from "styled-components"
import { PROJECT_NAME } from "../constants/_index"
import { iExternalLink, iDiscord } from "../components/icons/Icons"

// state
import { useAppDispatch, useAppSelector } from "../hooks/useRedux"
import { setTheme, selectTheme } from "../state/theme"

const Header: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const changeTheme = (): void => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"))
  }

  return (
    <HeaderStyled>
      <div className="nav">
        <div className="nav_items">
          <h1>{PROJECT_NAME}</h1>
          <span>scan</span>
        </div>

        <button onClick={changeTheme}>
          <span
            style={theme === "light" ? { textDecoration: "underline" } : null}
          >
            light
          </span>
          /
          <span
            style={theme === "dark" ? { textDecoration: "underline" } : null}
          >
            dark
          </span>
        </button>
      </div>

      <p className="description">
        {PROJECT_NAME} is a social money/payments token on the Internet
        Computer. It is experimental at its initial stage because there is no
        defined roadmap and its value is determined by the community's
        commitment, how many projects it's been integrated into and how many
        utilities it has. It is distributed through the airdrops and incentives.
      </p>

      <div className="links">
        <a
          href="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=fq7md-ayaaa-aaaag-abpea-cai"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>{iExternalLink}</span> Token Params
        </a>
        <a
          // id="discord"
          href="https://discord.gg/pvaBPqcwA2"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>{iDiscord}</span> Follow
        </a>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p.description {
    color: var(--secondaryColor);
  }

  > div.nav {
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
  }

  > div.links {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > a {
      height: 3rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--fs7);
      font-weight: var(--fwBold);
      color: var(--background);
      background-color: var(--primaryColor);
      padding: 0 0.75rem;
      border-radius: 1.5rem;
      transition: var(--transition1);

      &:hover {
        background-color: var(--tertiaryColor);
      }

      /* &#discord,
      &#discord * {
        color: var(--colorDiscord);
      } */

      > span {
        font-size: var(--fs7);
        opacity: 70%;
        /* color: var(--tertiaryColor); */
      }
    }
  }
`

export default Header
