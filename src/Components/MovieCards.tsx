import * as React from "react";
import { CardColumns, Row, Col, Button } from "reactstrap";
import { getMoviesFromParams } from "../Services/Api";
import Movie from "./Movie";
import * as ReactInputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import years from "../Data/years";
import genres from "../Data/genres";
import Checkbox from "./Checkbox";

const InputRange: typeof ReactInputRange.default = ReactInputRange as any;

interface State {
  movies: any;
  votes: any;
  year: number;
}

class MovieCards extends React.Component<{}, State> {
  selectedGenres: Set<any>;
  constructor(props: any) {
    super(props);
    const randomYear = years[Math.floor(Math.random() * years.length)];
    this.state = {
      movies: [],
      votes: { max: 10, min: 5 },
      year: randomYear
    };
  }

  async componentDidMount() {
    this.getMovies();
  }

  componentWillMount() {
    this.selectedGenres = new Set();
  }

  getMovies = async () => {
    const movies = await getMoviesFromParams(
      this.state.year,
      this.state.votes.min,
      this.state.votes.max,
      this.selectedGenres
    );
    this.setState({ movies: movies.results });
  };

  onYearChange = (year: number) => {
    this.setState({ year });
  };

  onVotesChange = (votes: any) => {
    this.setState({ votes });
  };

  filterMovies = () => {
    // set state of genres? then call get movies in callback?
    this.getMovies();
  };

  toggleCheckbox = (label: string) => {
    if (this.selectedGenres.has(label)) {
      this.selectedGenres.delete(label);
    } else {
      this.selectedGenres.add(label);
    }
  };

  createCheckbox = (genre: any) => (
    <Checkbox
      genreName={genre.name}
      genreId={genre.id}
      handleCheckboxChange={this.toggleCheckbox}
      key={genre.id}
    />
  );

  createCheckboxes = () =>
    genres.map((genre: any) => this.createCheckbox(genre));

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={6}>
            <InputRange
              maxValue={2018}
              minValue={1930}
              value={this.state.year}
              onChange={this.onYearChange}
            />
          </Col>
          <Col lg={6}>
            <InputRange
              maxValue={10}
              minValue={0}
              value={this.state.votes}
              onChange={this.onVotesChange}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>{this.createCheckboxes()}</Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button color="danger" onClick={this.filterMovies}>
              Filter movies
            </Button>
          </Col>
        </Row>
        <br />
        <CardColumns>
          {this.state.movies.map((movie: any) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </CardColumns>
      </React.Fragment>
    );
  }
}

export default MovieCards;
