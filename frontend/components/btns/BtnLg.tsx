import React, { FC, ButtonHTMLAttributes } from "react"
import styled from "styled-components"

interface BtnLgProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $type: "primary" | "secondary"
  $text: string
}

const BtnLg: FC<BtnLgProps> = ({ $type, $text, ...props }): JSX.Element => {
  return (
    <BtnLgStyled $type={$type} {...props}>
      {$text}
    </BtnLgStyled>
  )
}

const colors = {
  primary: "var(--background)",
  secondary: "var(--primaryColor)",
}

const bgColors = {
  primary: "var(--primaryColor)",
  secondary: "var(--underlay1)",
}

const hoverBgColors = {
  primary: "var(--secondaryColor)",
  secondary: "var(--underlay2)",
}

const BtnLgStyled = styled.button<{ $type: "primary" | "secondary" }>`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 0.5rem;
  padding: 0 0.75rem;
  font-size: var(--fs6);
  font-weight: var(--fwBold);
  border-radius: 1.25rem;
  transition: var(--transition1);

  /* disabled */

  opacity: ${(p) => (p.disabled ? "0.5" : null)};

  /* type based */

  color: ${(p) => colors[p.$type]};
  background-color: ${(p) => bgColors[p.$type]};

  &:hover {
    background-color: ${(p) => hoverBgColors[p.$type]};
  }
`

export default BtnLg
