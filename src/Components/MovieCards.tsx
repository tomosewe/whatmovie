import * as React from "react";
import { CardColumns, Row, Col, Button, Card } from "reactstrap";
import { getMoviesFromParams, getMoviesBySearchString } from "../Services/Api";
import Movie from "./Movie";
import Searchbar from "./Common/Searchbar";
import predefinedYears from "../Data/predefinedYears";
import genres from "../Data/genres";
import Checkbox from "./Checkbox";
import SliderCard from "./Common/SliderCard";

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
            <SliderCard
              header="Year of release"
              maxValue={2018}
              minValue={1930}
              inputValues={this.state.years}
              onSliderChange={this.onYearChange}
            />
          </Col>
          <Col lg={6}>
            <SliderCard
              header="Ratings"
              maxValue={10}
              minValue={10}
              inputValues={this.state.votes}
              onSliderChange={this.onVotesChange}
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
