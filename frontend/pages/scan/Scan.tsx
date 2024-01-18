import React, { FC } from "react"
import { styled } from "styled-components"

const Scan: FC = (): JSX.Element => {
  return (
    <ScanStyled>
      <h2>Latest Transactions</h2>
    </ScanStyled>
  )
}

const ScanStyled = styled.div`
  > h2 {
    font-size: var(--fs6);
  }
`

export default Scan
