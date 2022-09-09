import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getReviews } from "shared/api/apiMovies";
  
export const ReviewsPages = () => {
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
        const result = await getReviews(id);
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

  const { results } = state.item;

  return (
    <div>
      <Ul>
        {results && results.map(({id, author, content}) => (
            <Li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </Li>
          ))}
      </Ul>
    </div>
  )
}

const Ul = styled.ul`
`
const Li = styled.li`
  margin: 12px;
`