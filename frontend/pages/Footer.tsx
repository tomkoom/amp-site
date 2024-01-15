import React from "react"
import { styled } from "styled-components"
import { PROJECT_NAME } from "../constants/_index"

const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()

  return (
    <FooterStyled>
      <p>
        {year} © {PROJECT_NAME}
      </p>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  > p {
    font-size: var(--fsText);
    color: var(--tertiaryColor);
  }
`

export default Footer
