import React, { FC } from "react"
import { styled } from "styled-components"
import { PROJECT_NAME } from "@/constants/_index"

const Header: FC = (): JSX.Element => {
  const text =
    "The most #ic flexing token. Peer-to-peer social payments & meme digital currency"

  return (
    <HeaderStyled>
      <div className="description">
        <div className="title">
          <h2>{PROJECT_NAME}</h2>
        </div>
        <p>{text}</p>
      </div>

      {/* <div className="links">
        <LinkBtn
          $type={"primary"}
          $text={"Get FLEX"}
          href={SWAP_URL}
          target="_blank"
          rel="noreferrer noopener"
        />
      </div> */}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > div.description {
    > div.title {
      > h2 {
        font-size: var(--fs4);
        line-height: 120%;
      }
    }
  }

  > div.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    > a {
      height: 3rem;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: var(--background);
      background-color: var(--primaryColor);
      transition: var(--transition1);

      &:hover {
        background-color: var(--secondaryColor);
      }
    }
  }
`

export default Header
