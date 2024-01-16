import React, { FC } from "react"
import { styled } from "styled-components"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      <h2>Tokenomics</h2>
      <ul>
        <li>
          50% ET paired with 500 ICP allocated to initialize liquidity pool on{" "}
          <a
            href="https://app.icpswap.com/swap/liquidity/add/ryjl3-tyaaa-aaaaa-aaaba-cai/fq7md-ayaaa-aaaag-abpea-cai/3000"
            target="_blank"
            rel="noreferrer noopener"
          >
            ICPSwap
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
