import React, { FC } from "react"
import { styled } from "styled-components"

const Header: FC = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="nav">
        <h1>&</h1>
        {/* <button onClick={() => {}}>light/dark</button> */}
        <span onClick={() => {}}>light/dark</span>
      </div>

      <p className="description">
        &/amp is a social money/social payments token on the Internet Computer.
        It is experimental at its initial stage because there is no defined
        roadmap and its value is determined by the community's commitment, how
        many projects it's been integrated into and how many utilities it has.
        It is distributed through airdrops and incentives.
      </p>

      <div className="links">
        <a
          href="https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=fq7md-ayaaa-aaaag-abpea-cai"
          target="_blank"
          rel="noreferrer noopener"
        >
          Token params (candid) →
        </a>
        <a href="https://discord.gg/pvaBPqcwA2">
          Join the discussion & follow news on Discord →
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
  }

  > div.links {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > a {
      padding: 1rem;
      background-color: var(--underlay1);
      transition: var(--transition1);

      &:hover {
        background-color: var(--underlay2);
      }
    }
  }
`

export default Header
