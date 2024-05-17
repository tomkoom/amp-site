import React, { FC } from "react"
import styled from "styled-components"
import { TOTAL_SUPPLY, E8S } from "@/constants/_index"
import { formatNumber } from "@/utils/_index"

// state
import { useAppSelector } from "@/hooks/useRedux"
import { selectTotalLocked } from "@/state/canisterBalances"

const formatBalance = (numberE8s: number): string => {
  const num = Number((numberE8s / E8S).toString())
  return formatNumber(num)
}

const Circulation: FC = (): JSX.Element => {
  const totalLocked = useAppSelector(selectTotalLocked)

  const getFilledPercent = (): number => {
    return (totalLocked.e8s / TOTAL_SUPPLY.e8s) * 100
  }

  const getCirculation = (): string => {
    const num = TOTAL_SUPPLY.e8s - totalLocked.e8s
    return formatBalance(num)
  }

  const getCirculationPercent = (): number => {
    return 100 - getFilledPercent()
  }

  return (
    <CirculationStyled>
      <p>
        Circulating supply: {getCirculation()} (
        {getCirculationPercent().toFixed(2)}
        )%
      </p>

      <div className="bar">
        <div
          style={{ width: `${getFilledPercent().toFixed(2)}%` }}
          className="filled"
        ></div>
      </div>
    </CirculationStyled>
  )
}

const CirculationStyled = styled.div`
  width: 100%;

  > p {
    font-size: var(--fs7);
  }

  > div.bar {
    width: 100%;
    background-color: var(--underlay2);

    > div.filled {
      height: 1.5rem;
      background-color: #fff;
    }
  }
`

export default Circulation
