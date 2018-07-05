import * as store from "store";
// https://github.com/marcuswestin/store.js for local storage

const BASE_URL = "https://api.themoviedb.org/";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const DISCOVER_ENDPOINT = "3/discover/movie";
const SEARCH_ENDPOINT = "3/search/movie";
const SINGLE_MOVIE_ENDPOINT = "3/movie";
const LANG_PAGE = "&language=en-US&page=1";
const LANG = "&language=en-US";
const SORT_BY_POPULARITY = "&sort_by=popularity.desc";
const CERT = "&certification_country=US&certification.lte=NC-17";

export async function getMovie() {
  const endpoint = "3/movie/550";
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getTopRatedMovies() {
  const endpoint = "3/movie/top_rated";
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}${LANG_PAGE}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getMoviesFromParams(
  years: any,
  minVotes: number,
  maxVotes: number,
  selectedGenres: any
) {
  // make sure params exist before adding to api call?
  const filterByYear = `&primary_release_date.gte=${
    years.min
  }&primary_release_date.lte=${years.max}`;
  const filterByVotes = `&vote_average.gte=${minVotes}&vote_average.lte=${maxVotes}`;
  let queryParams = `${LANG_PAGE}${SORT_BY_POPULARITY}${CERT}${filterByYear}${filterByVotes}`;
  if (selectedGenres.size > 0) {
    queryParams += "&with_genres=" + Array.from(selectedGenres).join("|");
  }
  const url = `${BASE_URL}${DISCOVER_ENDPOINT}?api_key=${API_KEY}${queryParams}`;
  const date = new Date();
  const key = `${url}--${date.getMonth()}${date.getFullYear()}`;

  if (store.get(key)) {
    console.log("displaying cached results from local storage");
    return store.get(key);
  }

  const response = await fetch(url);
  const json = await response.json();
  store.set(key, json);
  return json;
}

export async function getMoviesBySearchString(searchString: string) {
  if (searchString.length <= 0) {
    return getTopRatedMovies();
  }
  const searchQuery = `&query=${searchString}`;
  const queryParams = `${LANG_PAGE}${searchQuery}`;
  const url = `${BASE_URL}${SEARCH_ENDPOINT}?api_key=${API_KEY}${queryParams}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getSingleMovie(movieId: number) {
  const url = `${BASE_URL}${SINGLE_MOVIE_ENDPOINT}/${movieId}?api_key=${API_KEY}${LANG}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getVideoInfo(movieId: number) {
  // https://api.themoviedb.org/3/movie/263115/videos?api_key=404c5f051b1105c7bfdc80d81d59107b&language=en-US
  const url = `${BASE_URL}${SINGLE_MOVIE_ENDPOINT}/${movieId}/videos?api_key=${API_KEY}${LANG}`;
  const response = await fetch(url);
  return await response.json();
}
