import React, { FC } from "react"
import styled from "styled-components"
import { formatNumber, camelToTitle } from "@/utils/_index"
import { TOKEN_SYMBOL } from "@/constants/_index"

// state
import { useAppSelector } from "@/hooks/useRedux"
import { selectCanisterBalances } from "@/state/canisterBalances"
import { E8S } from "@/constants/_index"

const formatBalance = (balanceE8s: number): string => {
  const num = Number((balanceE8s / E8S).toString())
  return formatNumber(num)
}

const Canisters: FC = (): JSX.Element => {
  const balances = useAppSelector(selectCanisterBalances)

  return (
    <CanistersStyled>
      <h3>Balances / Locked</h3>
      <div>
        {Object.keys(balances).map((canister) => (
          <div key={canister}>
            <p className="label">
              {canister === "fundPromo" ? "Promo Fund" : camelToTitle(canister)}
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
    </CanistersStyled>
  )
}

const CanistersStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h3 {
    font-size: var(--fs6);
  }

  > div {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 0.5rem;

    > div {
      flex: 1;
      background-color: var(--background);
      padding: 1rem;

      > p.label {
        color: var(--tertiaryColor);
        font-size: var(--fs6);
        /* font-size: var(--fs7); */
      }
    }
  }
`

export default Canisters
