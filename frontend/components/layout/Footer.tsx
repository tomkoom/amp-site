import React, { FC } from "react"
import { styled } from "styled-components"
import {
  PROJECT_NAME,
  TOKEN_UI_GITHUB_URL,
  TOKEN_LEDGER_GITHUB_URL,
  DISCORD_URL,
} from "@/constants/_index"

const Footer: FC = (): JSX.Element => {
  const d = new Date()
  const year = d.getFullYear()

  return (
    <FooterStyled>
      <p>
        {year} © {PROJECT_NAME}
      </p>

      <div className="links">
        <a href={DISCORD_URL} target="_blank" rel="noreferrer noopener">
          Discord
        </a>

        <a href={TOKEN_UI_GITHUB_URL} target="_blank" rel="noreferrer noopener">
          GitHub UI
        </a>

        <a
          href={TOKEN_LEDGER_GITHUB_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub Ledger
        </a>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  > p {
    font-size: var(--fs6);
    color: var(--tertiaryColor);
  }

  div.links {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      font-size: var(--fs6);
      color: var(--tertiaryColor);
      transition: var(--transition1);

      &:hover {
        color: var(--primaryColor);
      }
    }
  }
`

export default Footer
