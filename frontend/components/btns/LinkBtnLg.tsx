import React, { FC, AnchorHTMLAttributes } from "react"
import styled from "styled-components"

interface LinkBtnLgProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  $type: "primary" | "secondary"
  $text: string
}

const LinkBtnLg: FC<LinkBtnLgProps> = ({ $type, $text, ...props }): JSX.Element => {
  return (
    <LinkBtnLgStyled $type={$type} {...props}>
      {$text}
    </LinkBtnLgStyled>
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

const LinkBtnLgStyled = styled.a<{ $type: "primary" | "secondary" }>`
  /* common */
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: var(--fs6);
  font-weight: var(--fwBold);
  padding: 0 1rem;
  white-space: nowrap;
  transition: var(--transition1);

  /* custom */
  color: ${(p) => colors[p.$type]};
  background-color: ${(p) => bgColors[p.$type]};

  &:hover {
    background-color: ${(p) => hoverBgColors[p.$type]};
  }
`

export default LinkBtnLg
