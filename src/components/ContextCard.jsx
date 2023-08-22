import { useState, useEffect } from "react";
import { get } from "../data/getMovies.js";
import Card from "./Card.jsx";
import "./ContextCard.css";

const ContextCard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <>
      <ul className="container">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default ContextCard;
