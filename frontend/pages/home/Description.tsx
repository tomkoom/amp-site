import React, { FC } from "react"
import { styled } from "styled-components"
import { LinkBtn } from "@/components/ui/btns/_index"
import { DISCORD_URL, VAULT_ID, MINTER } from "@/constants/_index"
import kid from "@/assets/kid.gif"

const Description: FC = (): JSX.Element => {
  return (
    <DescriptionStyled>
      {/* <h3>Well-Known Accounts</h3>
      <ul>
        <li>
          Minter & controller: <span>{MINTER}</span>
        </li>
        <li>
          Burn address: <span>{MINTER}</span>
        </li>
        <li>
          Vault canister: <span>{VAULT_ID}</span>
        </li>
      </ul> */}

      <LinkBtn
        $type={"secondary"}
        $text={"Join On Discord"}
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer noopener"
      />

      <img src={kid} alt="kid flexing" />
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

  > img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 50%;
  }
`

export default Description
