import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        setState({
          ...state,
          loading: true,
          error: null,
      });
        const result = await getPopularMovies();
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result]
          }
        })
      } catch (error) {
        setState({
          ...state,
          error,
        })
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setState]);

  const { items, loading, error } = state;

  const elements = items.map(({ id, title }) => <li key={id}>
    <Link to={`/movies/${id}`}>{title}</Link>
  </li>)

  return (
    <div>
      <ul>{elements}</ul>
      {loading && <p>Loading movies</p>}
      {error && <p>Loading movies failed</p>}
    </div>
  )
}