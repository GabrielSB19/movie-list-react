import { Link } from "react-router-dom";
import "./Card.css";
import GetMovieImg from "../util/GetMovieImg.jsx";

const Card = ({ movie }) => {
  const imgUrl = GetMovieImg(movie.poster_path, 500);

  return (
    <>
      <li className="movieCard">
        <Link to={"/movie/" + movie.id}>
          <img
            src={imgUrl}
            width={230}
            height={345}
            alt={movie.title}
            className="movieImg"
          />
        </Link>
        <div>{movie.title}</div>
      </li>
    </>
  );
};

export default Card;
