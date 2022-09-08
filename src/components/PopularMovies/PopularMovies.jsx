import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getPopularMovies } from "shared/api/apiMovies";

export const PopularMovies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPopularMovies = async() => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
      }));
        const result = await getPopularMovies();
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result]
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

    fetchPopularMovies();
  }, [setState]);

  const { items, loading, error } = state;

  const elements = items.map(({ id, title }) => <Li key={id}>
    <LinkEl to={`/movies/${id}`}>{title}</LinkEl>
  </Li>)

  return (
    <Card>
      <ul>{elements}</ul>
      {loading && <p>Loading movies</p>}
      {error && <p>Loading movies failed</p>}
    </Card>
  )
}

const Card = styled.div`
  margin: 12px;
`
const LinkEl = styled(Link)`
  text-decoration: none;
  color: inherit;
  &: hover{
    color: #5941e8;
  }
`
const Li = styled.li`
padding-bottom: 4px;
font-size: 24px;
`
