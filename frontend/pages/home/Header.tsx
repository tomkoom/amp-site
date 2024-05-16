import React, { FC } from "react"
import { styled } from "styled-components"
import { PROJECT_NAME } from "@/constants/_index"
import { LinkBtn } from "@/components/btns/_index"
import { SWAP_URL, ADD_LIQUIDITY_URL, FLEX_LOGO } from "@/constants/_index"

const Header: FC = (): JSX.Element => {
  const text = "P2P CURRENCY ON THE INTERNET COMPUTER"

  return (
    <HeaderStyled>
      <div className="description">
        <img src={FLEX_LOGO} alt="FLEX logo" />
        <h2>{PROJECT_NAME}</h2>
        <p className="description">{text}</p>
        <p>Backed by cyql.io</p>
      </div>

      <div className="links">
        <LinkBtn
          $type={"primary"}
          $text={"Get FLEX"}
          href={SWAP_URL}
          target="_blank"
          rel="noreferrer noopener"
        />

        <LinkBtn
          $type={"secondary"}
          $text={"Add Liquidity & Earn Fees"}
          href={ADD_LIQUIDITY_URL}
          target="_blank"
          rel="noreferrer noopener"
        />
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > div.description {
    text-align: center;
    margin: 2rem 0 1rem 0;

    > img {
      max-width: 8rem;
    }

    > h2 {
      font-size: var(--fs1);
      font-weight: var(--fwBold);
      line-height: 120%;
      font-family: var(--highlightFont);
      margin-bottom: 0.5rem;
    }

    > p.description {
      font-size: var(--fs5);
      font-weight: var(--fwBold);
    }

    > p {
      font-size: var(--fs7);
    }
  }

  > div.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`

export default Header
