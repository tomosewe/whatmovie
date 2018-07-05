import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { getSingleMovie, getVideoInfo } from "../Services/Api";

const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "w780";
const IMDB_BASE_URL = "https://www.imdb.com/title/";
const TMDB_BASE_URL = "https://www.themoviedb.org/movie/";

interface State {
  movie: any;
  videoInfo: any;
}

class SingleMovie extends React.Component<RouteComponentProps<any>, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      movie: {},
      videoInfo: {}
    };
  }

  async componentDidMount() {
    this.getSingleMovie();
    this.getVideoInfo();
  }

  getSingleMovie = async () => {
    const movie = await getSingleMovie(this.props.match.params.movieId);
    this.setState({ movie });
  };

  getVideoInfo = async () => {
    const videoInfo = await getVideoInfo(this.props.match.params.movieId);
    this.setState({ videoInfo });
  };

  iframe = () => {
    // https://stackoverflow.com/questions/33913737/inserting-the-iframe-into-react-component
    if (this.state.videoInfo.results) {
      return {
        // this may not work if the first video is not a youtube video, check first.
        __html: `<iframe id="ytplayer" type="text/html" width="640" height="360"
      src="https://www.youtube.com/embed/${
        this.state.videoInfo.results[0].key
      }?enablejsapi=1&autoplay=0&origin=https://whatmovie.tomosewe.com"
      &hl=en-US&modestbranding=1&fs=1></iframe>`
      };
      // enablejsapi=1&autoplay=0&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en-US&modestbranding=1&fs=1
    }
    return { __html: "" };
  };

  render() {
    const movie = this.state.movie;

    return (
      <>
        <img
          src={`${IMAGES_BASE_URL}/${BACKDROP_SIZE}${movie.backdrop_path}`}
          alt=""
        />
        <h1>{movie.title}</h1>
        <h4>
          <em>{movie.tagline}</em>
        </h4>
        <h4>Released: {movie.release_date}</h4>
        <h5>
          <a
            href={`${IMDB_BASE_URL}${movie.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB
          </a>{" "}
          <a
            href={`${TMDB_BASE_URL}${movie.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
        </h5>
        <p>{movie.overview}</p>
        <p>
          <div dangerouslySetInnerHTML={this.iframe()} />
        </p>
      </>
    );
  }
}

export default SingleMovie;
