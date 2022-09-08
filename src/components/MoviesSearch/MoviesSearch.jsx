import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";


import { MoviesSearchForm } from "components/MoviesSearchForm/MoviesSearchForm";
import { getSearchMovies } from "shared/api/apiMovies";
import { MovieList } from "components/MovieList/MovieList";

export const MoviesSearch = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  // const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }))
        const data = await getSearchMovies(search);
        setState(prevState => ({
          ...prevState,
          items: data,
        }))
      } catch (error) {
        setState(prevState => ({
          ...prevState, 
          error,
        }))
      }
      finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }))
      }
    };

    if (search) {
      fetchMovies()
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({search});
  };

  const { items, loading, error } = state;

  return (
    <Card>
      <MoviesSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
      {loading && <p>Loading movies</p>}
      {error && <p>Loading movies failed</p>}
    </Card>
  )
};

const Card = styled.div`
  margin: 12px;
`