import React, { FC } from "react"
import { styled } from "styled-components"
import {
  PROJECT_NAME,
  TOKEN_SYMBOL,
  TOKEN_LEDGER_ID,
  SWAP_URL,
  LP_STATS_URL,
} from "../../constants/_index"
import kid from "../../assets/kid.gif"
import { LinkBtn } from "../../components/ui/btns/_index"

const Header: FC = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="description">
        <div className="title">
          <div className="images">
            <img src={kid} alt="kid flexing" />
          </div>

          <h2>{PROJECT_NAME}</h2>
        </div>

        <p className="text">
          The most #ic flexing token. No roadmap or plans, just have fun & see
          how it goes. 50% {TOKEN_SYMBOL} paired with 500 ICP allocated to init{" "}
          <a href={LP_STATS_URL} target="_blank" rel="noreferrer noopener">
            liquidity pool
          </a>
          , 50% {TOKEN_SYMBOL} reserved for airdrops, incentives, promo, team &
          fund. Ledger id: {TOKEN_LEDGER_ID}
        </p>
      </div>

      <div className="links">
        <LinkBtn
          $type={"primary"}
          $text={"Get FLEX"}
          href={SWAP_URL}
          target="_blank"
          rel="noreferrer noopener"
        />
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
    max-width: 54rem;

    > div.title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      > div.images {
        img {
          max-width: 20rem;
          width: 100%;
        }
      }

      > h2 {
        font-size: var(--fs4);
        line-height: 120%;
      }
    }

    > p,
    p * {
      font-size: var(--fs6);
      line-height: 140%;
      color: var(--secondaryColor);

      a {
        font-size: var(--fs6);
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
      transition: var(--transition1);

      &:hover {
        background-color: var(--secondaryColor);
      }

      > span.text {
        margin-top: 0.25rem;
        font-weight: var(--fwBold);
        line-height: 100%;
      }
    }
  }
`

export default Header
