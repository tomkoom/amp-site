import React, { FC, AnchorHTMLAttributes } from "react"
import styled from "styled-components"

interface LinkBtnProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  $type: "primary" | "secondary"
  $text: string
}

const LinkBtn: FC<LinkBtnProps> = ({ $type, $text, ...props }): JSX.Element => {
  return (
    <LinkBtnStyled $type={$type} {...props}>
      <span>{$text}</span>
    </LinkBtnStyled>
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

const LinkBtnStyled = styled.a<{ $type: "primary" | "secondary" }>`
  /* common */
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: var(--fs6);
  font-weight: var(--fwBold);
  padding: 0 0.65rem;
  white-space: nowrap;
  border-radius: 1.5rem;
  transition: var(--transition1);

  > span {
    margin-top: 0.2rem;
  }

  /* custom */
  color: ${(p) => colors[p.$type]};
  background-color: ${(p) => bgColors[p.$type]};

  &:hover {
    background-color: ${(p) => hoverBgColors[p.$type]};
  }
`

export default LinkBtn
