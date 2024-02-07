import React, { FC } from "react"
import { styled } from "styled-components"
import { Header, Metadata } from "./_index"

const Home: FC = (): JSX.Element => {
  return (
    <HomeStyled>
      <Header />
      <Metadata />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default Home
