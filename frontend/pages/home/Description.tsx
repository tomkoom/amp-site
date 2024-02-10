import React, { FC } from "react"
import { styled } from "styled-components"
import { LIQUIDITY_POOL_URL, TOKEN_SYMBOL } from "../../constants/_index"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      <h3>Well-Known Accounts</h3>
      <ul>
        <li>
          Minter & controller:{" "}
          <code>
            qacbl-dmvvz-7f4rd-qdkp2-drupw-qch3e-35tpx-xl6gh-my5bf-wndbh-xae
          </code>
        </li>
        <li>
          Burn address:{" "}
          <code>
            qacbl-dmvvz-7f4rd-qdkp2-drupw-qch3e-35tpx-xl6gh-my5bf-wndbh-xae
          </code>
        </li>
      </ul>
    </DescriptionStyled>
  )
}

const DescriptionStyled = styled.div`
  > h3 {
    margin-bottom: 0.5rem;
    font-size: var(--fs5);
  }

  ul {
    > li {
      > code {
        font-size: var(--fs6);
        background-color: var(--underlay1);
        padding: 0.1rem;
      }
    }
  }
`

export default Description
