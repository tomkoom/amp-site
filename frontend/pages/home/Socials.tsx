import React, { FC } from "react"
import { styled } from "styled-components"
import { DISCORD_URL, TWITTER_URL } from "@/constants/_index"
import { iDiscord, iTwitter } from "@/components/icons/Icons"

const Socials: FC = (): JSX.Element => {
  return (
    <SocialsStyled>
      <a
        id="twitter"
        href={TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {iTwitter}
      </a>

      <a
        id="discord"
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {iDiscord}
      </a>
    </SocialsStyled>
  )
}

const SocialsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > a {
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--underlay1);
    transition: var(--transition1);
    border-radius: 50%;

    > * {
      font-size: 1.1rem;
    }

    &:hover {
      /* color: var(--background); */
      /* background-color: #fff; */

      color: #fff;

      &#discord {
        background-color: var(--colorDiscord);
      }

      &#twitter {
        background-color: var(--colorTwitter);
      }
    }
  }
`

export default Socials
