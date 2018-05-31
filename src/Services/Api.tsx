const BASE_URL = "https://api.themoviedb.org/";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const DISCOVER_ENDPOINT = "3/discover/movie";
const SEARCH_ENDPOINT = "3/search/movie";
const LANG_PAGE = "&language=en-US&page=1";
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
  const response = await fetch(url);
  return await response.json();
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
