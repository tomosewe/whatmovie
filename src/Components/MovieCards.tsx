import * as React from "react";
import { CardColumns } from "reactstrap";
import { getTopRatedMovies } from "../Services/Api";
import Movie from "./Movie";

interface State {
  movies: any;
}

class MovieCards extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      movies: []
    };
  }
  public async componentDidMount() {
    const movies = await getTopRatedMovies();
    console.log(movies);
    this.setState({ movies: movies.results });
  }
  render() {
    return (
      <CardColumns>
        {this.state.movies.map((m: any, index: number) => (
          <Movie key={index} movie={m} />
        ))}
      </CardColumns>
    );
  }
}

export default MovieCards;
