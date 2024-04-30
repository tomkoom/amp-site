import React, { FC } from "react"
import { styled } from "styled-components"
import { LinkBtnLg } from "@/components/btns/_index"
import { DISCORD_URL, MINTER, LEDGER_ID, VAULT_ID } from "@/constants/_index"
import flex from "@/assets/flex.gif"

const Description: FC = (): JSX.Element => {
  // const ledgerUrl =
  //   "https://dashboard.internetcomputer.org/canister/qn35o-kiaaa-aaaag-aciiq-cai"

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

      <LinkBtnLg
        style={{
          fontFamily: "var(--highlightFont)",
          backgroundColor: "var(--colorDiscord)",
          fontSize: "var(--fs5)",
          marginTop: "1rem",
        }}
        $type={"secondary"}
        $text={"Join Discord"}
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer noopener"
      />

      {/* <img src={flex} alt="flex" /> */}
    </DescriptionStyled>
  )
}

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h3 {
    font-size: var(--fs5);
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
        font-size: var(--fs6);
      }

      > p.value {
        /* font-family: monospace; */
        font-family: var(--highlightFont);
        font-size: var(--fs5);
      }

      > a.value {
        text-decoration: underline;
      }
    }
  }

  > img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 50%;
  }
`

export default Description
