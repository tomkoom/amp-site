import React, { FC } from "react"
import { styled } from "styled-components"
import { PROJECT_NAME, DISCORD_URL } from "../../constants/_index"
import { iDiscord } from "../../components/icons/Icons"

const Header: FC = (): JSX.Element => {
  return (
    <HeaderStyled>
      <p className="description">
        {PROJECT_NAME} is a social payments token on the Internet Computer. It
        is experimental at its initial stage because there is no defined roadmap
        and its value is determined by the community's commitment, how many
        projects it's been integrated into and how many utilities it has. It is
        distributed through the airdrops and incentives.
      </p>

      <div className="links">
        <a href={DISCORD_URL} target="_blank" rel="noreferrer noopener">
          <span className="icon">{iDiscord}</span>
          <span className="text">Join Community</span>
        </a>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p.description {
    color: var(--secondaryColor);
  }

  > div.nav {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;

    * {
      font-size: var(--fs6);
    }

    > div.nav_items {
      display: flex;
      align-items: center;
      gap: 1rem;

      > span {
        cursor: pointer;
      }
    }
  }

  > div.links {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > a {
      height: 2.75rem;
      padding: 0 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--background);
      background-color: var(--primaryColor);
      border-radius: 0.5rem;
      transition: var(--transition1);

      &:hover {
        background-color: var(--tertiaryColor);
      }

      > span.icon {
        width: 1rem;
        height: 1rem;
        display: grid;
        place-items: center;
        font-size: var(--fs7);
        opacity: 70%;
      }

      > span.text {
        margin-top: 0.25rem;
        font-size: var(--fs7);
        font-weight: var(--fwBold);
        line-height: 100%;
      }
    }
  }
`

export default Header
