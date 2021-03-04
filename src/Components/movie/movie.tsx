import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap";
import { getTrailerLink } from "../../Services/Helpers";
import { MovieModel } from "../../models";

const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
const LOGO_SIZE = "w342";

export const Movie = ({ movie }: { movie: MovieModel }) => {
  const { release_date, title, vote_average, poster_path, overview } = movie;
  const releaseYear = release_date.substring(0, 4);
  const trailerLink = getTrailerLink(movie);

  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          Released: {releaseYear} | Rating: {vote_average}
        </CardSubtitle>
      </CardBody>
      <img
        width="100%"
        src={`${IMAGES_BASE_URL}${LOGO_SIZE}${poster_path}`}
        alt="poster"
      />
      <CardBody>
        <CardText>{overview}</CardText>
        <a
          className="card-link"
          href={trailerLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Trailer
        </a>
      </CardBody>
    </Card>
  );
};
