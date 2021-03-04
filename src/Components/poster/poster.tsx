import * as React from "react";
import { Link } from "react-router-dom";
import { MovieModel } from "../../models";

const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";
const LOGO_SIZE = "w154";

export const Poster = ({ movie }: { movie: MovieModel }) => {
  return (
    <div>
      <Link to={`/${movie.id}`}>
        <img
          width="100%"
          src={`${IMAGES_BASE_URL}${LOGO_SIZE}${movie.poster_path}`}
          alt="poster"
        />
      </Link>
    </div>
  );
};
