import * as React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h3>404 page not found</h3>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link className="btn btn-outline-info" to="/">
      Home
    </Link>
    &nbsp;
    <Link className="btn btn-outline-info" to="/about">
      About
    </Link>
  </div>
);

export default NotFound;
