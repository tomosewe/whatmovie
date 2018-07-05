import * as React from "react";

const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
const LOGO_SIZE = "w154";

interface Props {
  movie: any;
}

class Poster extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          width="100%"
          src={`${IMAGES_BASE_URL}${LOGO_SIZE}${this.props.movie.poster_path}`}
          alt="poster"
        />
      </div>
    );
  }
}

export default Poster;
