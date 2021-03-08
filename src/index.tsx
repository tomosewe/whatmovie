import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./Components";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
serviceWorker.register();
