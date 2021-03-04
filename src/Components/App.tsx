import "./App.css";
import * as React from "react";
import Header from "./Header";
import Main from "./Main";
import { Footer } from "../Components";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <Header />
        <br />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
