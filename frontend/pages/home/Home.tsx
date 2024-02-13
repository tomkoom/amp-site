import React, { FC } from "react"
import { styled } from "styled-components"
import { Header, Metadata, Description } from "./_index"

const Home: FC = (): JSX.Element => {
  return (
    <HomeStyled>
      <Header />
      {/* <Metadata /> */}
      <Description />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default Home
