import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getFullInfoMovie } from "shared/api/apiMovies";



export const MovieDetails = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // const params = useParams();
  // console.log(params);

  const { id } = useParams();

  useEffect(() => {
    const fetchFullInfoMovie = async() => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
      }));
        const result = await getFullInfoMovie(id);
        setState(prevState => {
          return {
            ...prevState,
            item: result,
          }
        })
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }))
      }
      finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          }
        })
      }
    };

    fetchFullInfoMovie();
  }, [id, setState]);

  const { poster_path,
    original_title,
    vote_average,
    overview,
    release_date,
    genres } = state.item;
  
  const posterImg = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (<>
    <Btm type="button" onClick={goBack}>Go back</Btm>
    <Card>
      <Img src={posterImg} alt={original_title} />
      <CardText>
        <H2>{original_title}</H2>
        <P>Release date: {release_date}</P>
        <P>Rating: {vote_average}</P>
        <h3>Overview: </h3>
        <P>{overview}</P>
        <h3>Genres:</h3>
        <P>
          {genres && genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
          </P>
      </CardText>
    </Card>
    </>
  )
}

const Btm = styled.button`
  margin: 12px;
  width: 100px;
  height: 32px;
  font-size: 16px;
  background-color: #d3cff6;
  &:hover{
    background-color: #8b79f6;
  }
`

const Card = styled.div`
  display: flex;
`

const Img = styled.img`
  width: 280px;
  margin: 12px;
`
const CardText = styled.div`
  margin: 12px;
`
const H2 = styled.h2`
  font-size: 32px;
  padding-bottom: 16px;
`
const P = styled.p`
  padding-bottom: 8px;
`