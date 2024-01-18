import React, { FC } from "react"
import { styled } from "styled-components"

// state
import { useAppSelector } from "../../hooks/useRedux"
import { selectTransactions } from "../../state/transactions"

const Scan: FC = (): JSX.Element => {
  const transactions = useAppSelector(selectTransactions)

  return (
    <ScanStyled>
      <h2>Latest Transactions</h2>
      {/* <pre>
        <code>{JSON.stringify([...transactions].reverse(), null, 2)}</code>
      </pre> */}

      {transactions.length === 0 && <p>...</p>}
      <ul>
        {[...transactions].reverse().map((t) => {
          const timestamp = new Date(Number(t.timestamp) / 1_000_000).toString()
          const to = t.transfer[0]?.to?.owner?.__principal__
          const from = t.transfer[0]?.from.owner?.__principal__

          return (
            <li key={String(t.timestamp)}>
              <p>kind: {t.kind}</p>
              <p>timestamp: {timestamp}</p>
              <p>to: {to}</p>
              <p>from: {from}</p>
            </li>
          )
        })}
      </ul>
    </ScanStyled>
  )
}

const ScanStyled = styled.div`
  > h2 {
    font-size: var(--fs6);
    margin-bottom: 2rem;
  }

  > ul {
    > li {
      margin-bottom: 1rem;
      margin-left: 1rem;
    }
  }
`

export default Scan
