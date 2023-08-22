import palceHolder from "../img/placeholder.png";

const GetMovieImg = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : palceHolder;
};
export default GetMovieImg;
