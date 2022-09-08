import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

import { MovieDetails } from "components/MovieDetails/MovieDetails";


export const MovieDetailsPage = () => {

  return (
    <MovieDetailsContainer>
      <MovieDetails/>
    </MovieDetailsContainer>
  )
}

const MovieDetailsContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`
// const H2 = styled.h2`
// font-size: 32px;
// text-align: center;
// margin:12px;
// `