import styled from "styled-components";


export const MoviesPage = () => {
  return (
    <MoviesContainer>
      <H2>Movies Page</H2>
    </MoviesContainer>
  )
}

const MoviesContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`
const H2 = styled.h2`
font-size: 32px;
text-align: center;
margin:12px;
`