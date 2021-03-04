import "./App.css";
import * as React from "react";
import Main from "./Main";
import { Footer, Header } from "../Components";

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
