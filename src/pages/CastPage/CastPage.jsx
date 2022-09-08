import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getCast } from "shared/api/apiMovies";
import smail from '../../Images/smail.jpg'

export const CastPage = () => {

  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  // const params = useParams();
  // console.log(params);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async() => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
      }));
        const result = await getCast(id);
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

    fetchCast();
  }, [id, setState]);

  const { cast } = state.item;

  return (
    <div>
      <Ul>
        {cast && cast.map(({id, profile_path, name, character}) => (
            <Li key={id}>
              <Img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : smail} alt={name} />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </Li>
          ))}
      </Ul>
    </div>
  )
}

const Img = styled.img`
  width: 50px;
`
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`
const Li = styled.li`
  list-style: none;
  flex-basis: calc(100% / 5 - 30px);
  margin: 15px;
  text-align: center;
`