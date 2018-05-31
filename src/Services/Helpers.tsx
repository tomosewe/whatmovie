export const getTrailerLink = (movie: any) => {
  const BASE_URL = "https://www.youtube.com/results?search_query=";

  const title = movie.title.replace(/\s/g, "+").toLowerCase();
  const releaseYear = movie.release_date.substring(0, 4);

  return `${BASE_URL}${title}+${releaseYear}+trailer+hd`;
};
