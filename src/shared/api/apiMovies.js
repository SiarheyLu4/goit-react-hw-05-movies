
const URL = 'https://api.themoviedb.org/3';
const KEY = 'b562b6919245407f9980120c8923230e';

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${URL}/trending/movie/day?api_key=${KEY}`);
    const movies = await response.json();
    // console.log(movies);
    return movies.results;
  } catch (error) {
    console.log(error);
  }
};

export const getFullInfoMovie = async (id) => {
  try {
    const response = await fetch(`${URL}/movie/${id}?api_key=${KEY}`);
    const movie = await response.json();
    // console.log(movie);
    return movie;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async (query) => { 
  try {
    const response = await fetch(`${URL}/search/movie?api_key=${KEY}&query=${query}`);
    const movies = await response.json();
    // console.log(movies);
    return movies.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async (id) => {
  try {
    const response = await fetch(`${URL}/movie/${id}/credits?api_key=${KEY}`);
    const cast = await response.json();
    console.log(cast);
    return cast;
  } catch (error) {
    console.log(error);
  }
};