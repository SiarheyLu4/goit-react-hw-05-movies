import styled from "styled-components";
import { useParams, Link, Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";

import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Button } from "components/Button/Button";


export const MovieDetailsPage = () => {

  const { id } = useParams();

  return (
    <MovieDetailsContainer>
      <Button/>
      <MovieDetails />
      <hr />
      <LinkEl to={`/movies/${id}/cast`}>Cast</LinkEl>
      <LinkEl to={`/movies/${id}/reviews`}>Reviews</LinkEl>
      <hr/>
      <Outlet />
    </MovieDetailsContainer>
  )
}

const MovieDetailsContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`
const LinkEl = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: inherit;
  margin: 12px;
  &:hover{
    color: #5941e8;
  }
`