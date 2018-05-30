import "./App.css";
import * as React from "react";
import Navigation from "./Navigation";
import MovieCards from "./MovieCards";
import { Container } from "reactstrap";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Navigation />
        <br />
        <Container>
          <MovieCards />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
