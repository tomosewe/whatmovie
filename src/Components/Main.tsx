import * as React from "react";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import * as ReactGA from "react-ga";
import { About, NotFound } from "../Components";
import MovieCards from "./MovieCards";
import SingleMovie from "./SingleMovie";

ReactGA.initialize("UA-80655492-3");

class Main extends React.Component<{}, {}> {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  componentDidUpdate() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  public render() {
    return (
      <main>
        <Container>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/single" component={SingleMovie} />
            <Route exact={true} path="/" component={MovieCards} />
            <Route path="/:movieId" component={SingleMovie} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </main>
    );
  }
}

export default Main;
