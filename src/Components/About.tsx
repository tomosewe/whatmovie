import * as React from "react";

class About extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <p>
          Created by{" "}
          <a
            href="https://tomosewe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tomos Ewe
          </a>
        </p>
        <a
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/tmdblogo.png"
            alt="The Movie DB"
            style={{ width: "200px" }}
          />
        </a>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.{" "}
        </p>
      </React.Fragment>
    );
  }
}

export default About;
