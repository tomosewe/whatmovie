import * as React from "react";

const LogoStyles = {
  width: "200px"
};

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
            style={LogoStyles}
          />
        </a>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.{" "}
        </p>
        <div>
          Icons made by{" "}
          <a
            href="http://www.freepik.com"
            title="Freepik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
