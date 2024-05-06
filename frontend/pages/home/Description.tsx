import React, { FC } from "react"
import { styled } from "styled-components"
import {
  DISCORD_URL,
  MINTER,
  LEDGER_ID,
  VAULT_ID,
  TWITTER_URL,
} from "@/constants/_index"
import { iDiscord, iTwitter } from "@/components/icons/Icons"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      <h3>Well-Known Accounts</h3>

      <ul>
        <li>
          <p className="label">Ledger id</p>
          <p className="value">{LEDGER_ID}</p>
        </li>

        <li>
          <p className="label">Minter & burn address</p>
          <p className="value">{MINTER}</p>
        </li>

        <li>
          <p className="label">Vault</p>
          <p className="value">{VAULT_ID}</p>
        </li>
      </ul>

      <div className="links">
        <a
          id="twitter"
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iTwitter}
        </a>

        <a
          id="discord"
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iDiscord}
        </a>
      </div>
    </DescriptionStyled>
  )
}

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h3 {
    font-size: var(--fs6);
  }

  ul {
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;

    > li {
      flex: 1;
      background-color: var(--background);
      padding: 1rem;

      > p {
        text-align: left;
      }

      > p.label {
        color: var(--tertiaryColor);
        font-size: var(--fs7);
      }

      > p.value {
        font-family: var(--highlightFont);
        font-size: var(--fs6);
      }
    }
  }

  > div.links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;

    > a {
      width: 3.25rem;
      height: 3.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--underlay1);
      transition: var(--transition1);
      border-radius: 50%;

      > * {
        font-size: 1.1rem;
      }

      &:hover {
        /* color: var(--background); */
        /* background-color: #fff; */

        color: #fff;

        &#discord {
          background-color: var(--colorDiscord);
        }

        &#twitter {
          background-color: var(--colorTwitter);
        }
      }
    }
  }
`

export default Description
