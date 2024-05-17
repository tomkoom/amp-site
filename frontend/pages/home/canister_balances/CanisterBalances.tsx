import React, { FC } from "react"
import styled from "styled-components"
import { formatNumber, camelToTitle } from "@/utils/_index"
import { TOKEN_SYMBOL } from "@/constants/_index"
import { Circulation } from "./_index"

// state
import { useAppSelector } from "@/hooks/useRedux"
import { selectCanisterBalances } from "@/state/canisterBalances"
import { E8S } from "@/constants/_index"

const formatBalance = (balanceE8s: number): string => {
  const num = Number((balanceE8s / E8S).toString())
  return formatNumber(num)
}

const CanisterBalances: FC = (): JSX.Element => {
  const balances = useAppSelector(selectCanisterBalances)

  return (
    <CanisterBalancesStyled>
      <h3>Canister Balances / Circulation</h3>
      <Circulation />

      <div className="balances">
        {Object.keys(balances).map((canister) => (
          <div key={canister}>
            <p className="label">
              {canister === "fundPromo"
                ? "Promo Fund"
                : canister === "ogClaim"
                ? "OG Claim Reserve"
                : camelToTitle(canister)}
            </p>
            <p className="value">
              {formatBalance(balances[canister].balance.e8s)} {TOKEN_SYMBOL}
            </p>
          </div>
        ))}
      </div>
      {/* <div>
        <div>
          <p>Locked</p>
        </div>
      </div> */}
    </CanisterBalancesStyled>
  )
}

const CanisterBalancesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h3 {
    font-size: var(--fs6);
  }

  > div.balances {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 0.5rem;

    > div {
      flex: 1;
      background-color: var(--background);
      padding: 1rem;

      > p {
        line-height: 140%;
      }

      > p.label {
        color: var(--tertiaryColor);
        font-size: var(--fs7);
        font-weight: var(--fwMedium);
        margin-bottom: 0.1rem;
      }

      > p.value {
        white-space: nowrap;
      }
    }
  }
`

export default CanisterBalances
