import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getReviews } from "shared/api/apiMovies";
  
const ReviewsPages = () => {
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
      <ul>
        {results.length > 0 ? results.map(({ id, author, content }) => (
            <Li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </Li>
          )) : <P>We don`t have any reviews for this movie</P>}
      </ul>
    </div>
  )
}

const P = styled.p`
  margin: 12px;
`
const Li = styled.li`
  margin: 12px;
`

export default ReviewsPages;