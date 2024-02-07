import React, { FC } from "react"
import { styled } from "styled-components"
import {
  PROJECT_NAME,
  DISCORD_URL,
  TOKEN_SYMBOL,
  TOKEN_LEDGER_ID,
} from "../../constants/_index"
// import { iDiscord } from "../../components/icons/Icons"
import kid from "../../assets/kid.gif"

const Header: FC = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="description">
        <div className="title">
          <div>
            <img src={kid} alt="kid dancing" />
            <img src={kid} alt="kid dancing" />
            <img src={kid} alt="kid dancing" />
          </div>

          <h2>{PROJECT_NAME}</h2>
        </div>

        <p>
          the most #ic flexing token. No roadmap or plans, just have fun & see
          how it goes. Init and managed by{" "}
          <a
            href="https://twitter.com/_tomkoom "
            target="_blank"
            rel="noreferrer noopener"
          >
            tomkoom
          </a>
          . 50% {TOKEN_SYMBOL} paired with 500 ICP allocated to init liquidity
          pool, 50% {TOKEN_SYMBOL} reserved for airdrops, incentives, promo,
          team & fund. Canister id: {TOKEN_LEDGER_ID}
        </p>
      </div>

      <div className="links">
        <a href={DISCORD_URL} target="_blank" rel="noreferrer noopener">
          <span className="text">Get FLEX</span>
        </a>

        {/* <a href={DISCORD_URL} target="_blank" rel="noreferrer noopener">
          <span className="icon">{iDiscord}</span>
          <span className="text">Join FLEX Army</span>
        </a> */}
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > div.description {
    max-width: 48rem;

    > div.title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      > div img {
        max-width: 12rem;
        width: 100%;
      }

      > h2 {
        font-size: var(--fs5);
        line-height: 120%;
      }
    }

    > p,
    p * {
      font-size: var(--fs5);
      line-height: 120%;
      color: var(--secondaryColor);

      a {
        font-size: var(--fs5);
        color: var(--secondaryColor);
        text-decoration: underline;
        transition: var(--transition1);

        &:hover {
          color: var(--primaryColor);
        }
      }
    }
  }

  > div.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    > a {
      height: 3rem;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: var(--background);
      background-color: var(--primaryColor);
      /* border-radius: 1.5rem; */
      transition: var(--transition1);

      &:hover {
        background-color: var(--secondaryColor);
      }

      > span.icon {
        width: 1rem;
        height: 1rem;
        display: grid;
        place-items: center;
        font-size: var(--fs7);
        opacity: 60%;
      }

      > span.text {
        margin-top: 0.25rem;
        font-size: var(--fs7);
        font-weight: var(--fwBold);
        line-height: 100%;
      }
    }
  }
`

export default Header
