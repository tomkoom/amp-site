import React, { FC } from "react"
import { styled } from "styled-components"
import { LinkBtn } from "../../components/ui/btns/_index"
import { DISCORD_URL } from "../../constants/_index"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      <h3>Well-Known Accounts</h3>
      <ul>
        <li>
          Minter & controller:{" "}
          <span>
            qacbl-dmvvz-7f4rd-qdkp2-drupw-qch3e-35tpx-xl6gh-my5bf-wndbh-xae
          </span>
        </li>
        <li>
          Burn address:{" "}
          <span>
            qacbl-dmvvz-7f4rd-qdkp2-drupw-qch3e-35tpx-xl6gh-my5bf-wndbh-xae
          </span>
        </li>
      </ul>

      <LinkBtn
        $type={"secondary"}
        $text={"Join On Discord"}
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer noopener"
      />
    </DescriptionStyled>
  )
}

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h3 {
    font-size: var(--fs5);
  }

  ul {
    > li {
      line-height: 180%;
      > span {
        background-color: var(--underlay1);
        padding: 0.1rem 0.25rem;
      }
    }
  }
`

export default Description
