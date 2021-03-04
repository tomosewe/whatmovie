import * as React from "react";
import { Button, Card, CardColumns, Col, Row } from "reactstrap";
import genres from "../Data/genres";
import predefinedYears from "../Data/predefinedYears";
import { getMoviesBySearchString, getMoviesFromParams } from "../Services/Api";
import Checkbox from "./Checkbox";
import Searchbar from "./Common/Searchbar";
import SliderCard from "./Common/SliderCard";
import { Movie, Poster } from "../Components";
import { MovieModel } from "../models";

interface State {
  movies: MovieModel[];
  searchInput: string;
  votes: any;
  years: { max: number; min: number };
  showPosters: boolean;
  selectedGenres: Set<any>;
}

class MovieCards extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    let randomYear =
      predefinedYears[Math.floor(Math.random() * predefinedYears.length)];
    this.state = {
      movies: [],
      searchInput: "",
      showPosters: true,
      votes: { max: 10, min: 5 },
      years: {
        max: predefinedYears[predefinedYears.length - 1],
        min: randomYear === 2018 ? randomYear - 1 : randomYear,
      },
      selectedGenres: new Set(),
    };
  }

  async componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    let moviesArray: any[] = [];
    for (let index = 1; index <= 5; index++) {
      const movies = await getMoviesFromParams(
        this.state.years,
        this.state.votes.min,
        this.state.votes.max,
        this.state.selectedGenres,
        index
      );
      moviesArray = moviesArray.concat(movies.results);
    }

    this.setState({ movies: moviesArray });
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
    if (this.state.selectedGenres.has(label)) {
      this.state.selectedGenres.delete(label);
    } else {
      this.state.selectedGenres.add(label);
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

  displayMovieCards = () => {
    return (
      <CardColumns>
        {this.state.movies.map((movie: any) => (
          <Movie key={movie.id} movie={movie} />
        ))}
        ;
      </CardColumns>
    );
  };

  displayPosters = () => {
    return (
      <div className="grid-wrapper">
        {this.state.movies.map((movie) => (
          <Poster key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };

  toggleView = () => {
    this.setState({ showPosters: !this.state.showPosters });
  };

  render() {
    return (
      <>
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
              minValue={0}
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
        <Button onClick={this.toggleView}>
          {this.state.showPosters ? "Show as cards" : "Show as posters"}
        </Button>
        <br />
        <br />
        {this.state.showPosters
          ? this.displayPosters()
          : this.displayMovieCards()}
      </>
    );
  }
}

export default MovieCards;
