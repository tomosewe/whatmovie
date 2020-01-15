import * as React from "react";
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap";
import { getTrailerLink } from "../Services/Helpers";

const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
const LOGO_SIZE = "w342";

interface Props {
  movie: any;
}

class Movie extends React.Component<Props, {}> {
  render() {
    const releaseYear = this.props.movie.release_date.substring(0, 4);
    const trailerLink = getTrailerLink(this.props.movie);
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.movie.title}</CardTitle>
          <CardSubtitle>
            Released: {releaseYear} | Rating: {this.props.movie.vote_average}
          </CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src={`${IMAGES_BASE_URL}${LOGO_SIZE}${this.props.movie.poster_path}`}
          alt="poster"
        />
        <CardBody>
          <CardText>{this.props.movie.overview}</CardText>
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
  }
}

export default Movie;
