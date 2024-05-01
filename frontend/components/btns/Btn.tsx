import React, { FC, ButtonHTMLAttributes } from "react"
import styled from "styled-components"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $type: "primary" | "secondary"
  $text: string
}

const Btn: FC<BtnProps> = ({ $type, $text, ...props }): JSX.Element => {
  return (
    <BtnStyled $type={$type} {...props}>
      {$text}
    </BtnStyled>
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

const BtnStyled = styled.button<{ $type: "primary" | "secondary" }>`
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 0.5rem;
  padding: 0 0.75rem;
  font-size: var(--fsText);
  font-weight: var(--fwBold);
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

export default Btn
