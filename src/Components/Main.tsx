import * as React from "react";
import MovieCards from "./MovieCards";
import About from "./About";
import Random from "./Random";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

class Main extends React.Component<{}, {}> {
  public render() {
    return (
      <main>
        <Container>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/random" component={Random} />
            <Route exact={true} path="/" component={MovieCards} />
          </Switch>
        </Container>
      </main>
    );
  }
}

export default Main;
