import React, { FC } from "react"
import { styled } from "styled-components"
import { LinkBtn } from "@/components/ui/btns/_index"
import { DISCORD_URL, MINTER } from "@/constants/_index"
import kid from "@/assets/flex.gif"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      <h3>Well-Known Accounts</h3>
      <ul>
        <li>
          <p className="label">Minter & burn address</p>
          <p className="value">{MINTER}</p>
        </li>
      </ul>

      <LinkBtn
        $type={"secondary"}
        $text={"Join Discord"}
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer noopener"
      />

      <img src={kid} alt="flex" />
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
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;

    > li {
      background-color: var(--background);
      padding: 1rem;

      > p {
        text-align: left;
      }

      > p.label {
        color: var(--tertiaryColor);
        font-size: var(--fsText);
        margin-bottom: 0.25rem;
      }

      > p.value {
        background-color: var(--underlay1);
      }
    }
  }

  > img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 50%;
  }
`

export default Description
