import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../data/getMovies.js";
import GetMovieImg from "../util/GetMovieImg.jsx";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenres(data.genres);
    });
  }, [movieId]);

  const imgUrl = GetMovieImg(movie.poster_path, 500);

  return (
    <div className="container">
      <img src={imgUrl} alt={movie.title} className="col movieImg" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
