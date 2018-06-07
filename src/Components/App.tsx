import "./App.css";
import * as React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
