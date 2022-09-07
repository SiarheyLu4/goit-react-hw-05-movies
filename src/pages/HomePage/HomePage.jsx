import styled from "styled-components";

import { PopularMovies } from "components/PopularMovies/PopularMovies";


export const HomePage = () => {
  return (
    <HomeContainer>
      <H2>Home Page</H2>
      <PopularMovies/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`
const H2 = styled.h2`
font-size: 32px;
text-align: center;
margin:12px;
`