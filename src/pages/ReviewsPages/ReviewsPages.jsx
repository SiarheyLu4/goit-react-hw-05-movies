import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getReviews } from "shared/api/apiMovies";
  
const ReviewsPages = () => {
const [state, setState] = useState({
    items: [],
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
            items: result,
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

  const { items, loading, error } = state;

  const elements = items.map(({ id, author, content }) => (
    <Li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </Li>
  ));

  console.log(elements);

  return (
    <div>
      {items.length > 0 ? (<Ul> {elements} </Ul>) :
        (<p>We don't have any revuews for this movies</p>)}
      {loading && <p>Loading movies</p>}
      {error && <p>Loading movies failed</p>}
    </div>
  )
}

const Ul = styled.ul`
`
const Li = styled.li`
  margin: 12px;
`

export default ReviewsPages;