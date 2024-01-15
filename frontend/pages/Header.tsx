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
        <h1>{PROJECT_NAME}</h1>
        <button onClick={changeTheme}>light/dark</button>
      </div>

      <p className="description">
        {PROJECT_NAME} is a social money & payments token on the Internet
        Computer. It is experimental at its initial stage because there is no
        defined roadmap and its value is determined by the community's
        commitment, how many projects it's been integrated into and how many
        utilities it has. It is distributed through airdrops and incentives.
      </p>

      <div className="links">
        <a
          href="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=fq7md-ayaaa-aaaag-abpea-cai"
          target="_blank"
          rel="noreferrer noopener"
        >
          Token Params <span>{iExternalLink}</span>
        </a>
        <a
          href="https://discord.gg/pvaBPqcwA2"
          target="_blank"
          rel="noreferrer noopener"
        >
          Follow on Discord <span>{iDiscord}</span>
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
  }

  > div.links {
    display: flex;
    align-items: stretch;
    gap: 0.5rem;

    > a {
      flex: 1;
      padding: 1rem;
      background-color: var(--underlay1);
      transition: var(--transition1);

      &:hover {
        background-color: var(--underlay2);
      }

      > span {
        font-size: 0.8rem;
        color: var(--tertiaryColor);
      }
    }
  }
`

export default Header
