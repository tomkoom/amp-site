import React, { FC, ReactNode, AnchorHTMLAttributes } from "react"
import styled from "styled-components"

interface LinkBtnProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  $type: "primary" | "secondary"
  $text: string
}

const LinkBtn: FC<LinkBtnProps> = ({ $type, $text, ...props }): JSX.Element => {
  return (
    <LinkBtnStyled
      $type={$type}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    >
      <span>{$text}</span>
    </LinkBtnStyled>
  )
}

const colors = {
  primary: "#fff",
  secondary: "var(--primaryColor)",
}

const bgColors = {
  primary: "var(--underlay1)",
  secondary: "var(--underlay1)",
}

const hoverBgColors = {
  primary: "var(--underlay2)",
  secondary: "var(--underlay2)",
}

const LinkBtnStyled = styled.a<{ $type: "primary" | "secondary" }>`
  /* common */
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  font-size: 0.8rem;
  font-weight: var(--fwBold);
  transition: var(--transition1);

  /* custom */
  color: ${(p) => colors[p.$type]};
  background-color: ${(p) => bgColors[p.$type]};

  &:hover {
    background-color: ${(p) => hoverBgColors[p.$type]};
  }
`

export default LinkBtn
