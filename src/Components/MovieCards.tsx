import * as React from "react";
import { CardColumns, Row, Col } from "reactstrap";
import { getMoviesFromParams } from "../Services/Api";
import Movie from "./Movie";
import * as ReactInputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const InputRange: typeof ReactInputRange.default = ReactInputRange as any;

interface State {
  movies: any;
  year: number;
}

const years = [
  1994,
  1995,
  1996,
  1997,
  1998,
  1999,
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018
];

class MovieCards extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    const randomYear = years[Math.floor(Math.random() * years.length)];
    this.state = {
      movies: [],
      year: randomYear
    };
  }
  public async componentDidMount() {
    this.getMovies(2004);
  }

  getMovies = async (year: number) => {
    const movies = await getMoviesFromParams(this.state.year);
    console.log(movies);
    this.setState({ movies: movies.results });
  };

  onYearChange = (year: number) => {
    this.setState({ year }, () => {
      this.getMovies(this.state.year);
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
