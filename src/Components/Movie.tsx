import * as React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  CardLink
} from "reactstrap";

const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
const LOGO_SIZE = "w342";
const IMDB_BASE_URL = "https://www.imdb.com/title/";

interface Props {
  movie: any;
}

class Movie extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.movie.title}</CardTitle>
          <CardSubtitle>
            Released: {this.props.movie.release_date.substring(0, 4)} | Rating:{" "}
            {this.props.movie.vote_average}
          </CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src={`${IMAGES_BASE_URL}${LOGO_SIZE}${this.props.movie.poster_path}`}
          alt="poster"
        />
        <CardBody>
          <CardText>{this.props.movie.overview}</CardText>
          {this.props.movie.imdb_id ? (
            <CardLink href={`${IMDB_BASE_URL}${this.props.movie.imdb_id}`}>
              IMDB
            </CardLink>
          ) : (
            ""
          )}
          {this.props.movie.homepage ? (
            <CardLink href={this.props.movie.homepage}>Homepage</CardLink>
          ) : (
            ""
          )}
        </CardBody>
      </Card>
    );
  }
}

export default Movie;
