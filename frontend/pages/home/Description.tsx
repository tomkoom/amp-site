import React, { FC } from "react"
import { styled } from "styled-components"
import {
  MINTER,
  LEDGER_ID,
  VAULT,
  FUND,
  FUND_PROMO,
  TREASURY,
} from "@/constants/_index"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      <h3>Well-Known Accounts</h3>

      <ul>
        <li>
          <p className="label">Ledger Id</p>
          <p className="value">{LEDGER_ID}</p>
        </li>

        <li>
          <p className="label">Minter & Burn Address</p>
          <p className="value">{MINTER}</p>
        </li>

        <li>
          <p className="label">Vault</p>
          <p className="value">{VAULT}</p>
        </li>

        <li>
          <p className="label">Fund</p>
          <p className="value">{FUND}</p>
        </li>

        <li>
          <p className="label">Promo Fund</p>
          <p className="value">{FUND_PROMO}</p>
        </li>

        <li>
          <p className="label">Treasury</p>
          <p className="value">{TREASURY}</p>
        </li>
      </ul>
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
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
        font-weight: var(--fwMedium);
      }

      > p.value {
        font-size: var(--fs6);
      }
    }
  }
`

export default Description
