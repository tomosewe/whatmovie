const BASE_URL = "https://api.themoviedb.org/";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const URL_END = "&language=en-US&page=1";
const US_LANG = "&language=en-US";
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
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}${URL_END}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getMoviesFromParams(
  year: number,
  minVotes: number,
  maxVotes: number,
  selectedGenres: any
) {
  // make sure params exist before adding to api call?
  const endpoint = "3/discover/movie";
  const filterByYear = `&primary_release_year=${year}`;
  const filterByVotes = `&vote_average.gte=${minVotes}&vote_average.lte=${maxVotes}`;
  let discoverEnd = `&page=1${US_LANG}${SORT_BY_POPULARITY}${CERT}${filterByYear}${filterByVotes}`;
  if (selectedGenres.size > 0) {
    discoverEnd += "&with_genres=" + Array.from(selectedGenres).join("|");
  }
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}${discoverEnd}`;
  const response = await fetch(url);
  return await response.json();
}
