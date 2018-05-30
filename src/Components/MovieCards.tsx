import * as React from "react";
import { CardColumns, Row, Col } from "reactstrap";
import { getMoviesFromParams } from "../Services/Api";
import Movie from "./Movie";
import * as ReactInputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import years from "../Data/years";
import genres from "../Data/genres";

const InputRange: typeof ReactInputRange.default = ReactInputRange as any;

interface State {
  movies: any;
  votes: any;
  year: number;
}

class MovieCards extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    const randomYear = years[Math.floor(Math.random() * years.length)];
    this.state = {
      movies: [],
      votes: { max: 10, min: 5 },
      year: randomYear
    };
  }
  public async componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const movies = await getMoviesFromParams(this.state.year, this.state.votes.min, this.state.votes.max);
    console.log(movies);
    this.setState({ movies: movies.results });
  };

  onYearChange = (year: number) => {
    this.setState({ year }, () => {
      this.getMovies();
    });
  };

  onVotesChange = (votes: any) => {
    this.setState({ votes }, () => {
      this.getMovies();
    });
  };

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
              onChange={this.onVotesChange} />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            {genres.map((genre: any) => (
              <div className="pretty p-default p-round p-thick">
                <input type="checkbox" />
                <div className="state p-primary-o">
                  <label>{genre.name}</label>
                </div>
              </div>
            ))}
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
