const BASE_URL = "https://api.themoviedb.org/";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const URL_END = "&language=en-US&page=1";

export async function getMovie() {
  const endpoint = "3/movie/550";
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getTopRatedMovies() {
  // example url:"https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1";
  const endpoint = "3/movie/top_rated";
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}${URL_END}`;
  const response = await fetch(url);
  return await response.json();
}
