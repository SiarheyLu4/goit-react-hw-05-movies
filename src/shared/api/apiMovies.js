
const URL = 'https://api.themoviedb.org/3';
const KEY = 'b562b6919245407f9980120c8923230e';

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${URL}/trending/movie/day?api_key=${KEY}`);
    const movies = await response.json();
    console.log(movies);
    return movies.results;
  } catch (error) {
    console.log(error);
  }
};