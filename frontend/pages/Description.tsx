import React, { FC } from "react"
import { styled } from "styled-components"
import { LIQUIDITY_POOL_URL } from "../constants/_index"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      <h2>Tokenomics</h2>
      <ul>
        <li>
          50% ET paired with 500 ICP allocated to initialize{" "}
          <a
            href={LIQUIDITY_POOL_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            liquidity pool
          </a>
        </li>
        <li>50% ET: airdrop, incentives, marketing, fund</li>
      </ul>
    </DescriptionStyled>
  )
}

const DescriptionStyled = styled.div`
  > h2 {
    margin-bottom: 0.5rem;
    font-size: var(--fs6);
  }

  ul {
    margin-left: 0.75rem;

    > li {
      a {
        text-decoration: underline;
      }
    }
  }
`

export default Description
