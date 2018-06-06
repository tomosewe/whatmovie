import * as React from "react";
import {
  CardColumns,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import { getMoviesFromParams, getMoviesBySearchString } from "../Services/Api";
import Movie from "./Movie";
import Searchbar from "./Common/Searchbar";
import * as ReactInputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import predefinedYears from "../Data/predefinedYears";
import genres from "../Data/genres";
import Checkbox from "./Checkbox";

const InputRange: typeof ReactInputRange.default = ReactInputRange as any;

interface State {
  movies: any;
  searchInput: string;
  votes: any;
  years: any;
}

class MovieCards extends React.Component<{}, State> {
  selectedGenres: Set<any>;
  constructor(props: any) {
    super(props);
    const randomYear =
      predefinedYears[Math.floor(Math.random() * predefinedYears.length)];
    this.state = {
      movies: [],
      searchInput: "",
      votes: { max: 10, min: 5 },
      years: {
        max: predefinedYears[predefinedYears.length - 1],
        min: randomYear === 2018 ? randomYear - 1 : randomYear
      }
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
      this.state.years,
      this.state.votes.min,
      this.state.votes.max,
      this.selectedGenres
    );
    this.setState({ movies: movies.results });
  };

  getMoviesBySearchParam = async (searchString: string) => {
    const movies = await getMoviesBySearchString(searchString);
    this.setState({ movies: movies.results });
  };

  onYearChange = (years: any) => {
    this.setState({ years });
  };

  onVotesChange = (votes: any) => {
    this.setState({ votes });
  };

  filterMovies = () => {
    // set state of genres? then call get movies in callback?
    this.getMovies();
  };

  submitSearch = () => {
    this.getMoviesBySearchParam(this.state.searchInput);
  };

  handleChange = (e: any) => {
    this.setState({ searchInput: e.target.value });
  };

  handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      this.getMoviesBySearchParam(this.state.searchInput);
    }
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
        <Searchbar
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          submitSearch={this.submitSearch}
        />
        <br />
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>Year of release</CardHeader>
              <CardBody>
                <InputRange
                  maxValue={2018}
                  minValue={1930}
                  value={this.state.years}
                  onChange={this.onYearChange}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <CardHeader>Ratings</CardHeader>
              <CardBody>
                <InputRange
                  maxValue={10}
                  minValue={0}
                  value={this.state.votes}
                  onChange={this.onVotesChange}
                />
              </CardBody>
            </Card>
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
            <Card>
              <Button color="danger" onClick={this.filterMovies}>
                Filter movies
              </Button>
            </Card>
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
