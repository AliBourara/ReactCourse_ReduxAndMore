import { MoviesType } from "../Data";

interface MovieViewProps {
  movie: MoviesType;
  onSelectedMovie: (id: string) => void;
}
export function Movie({ movie, onSelectedMovie }: MovieViewProps) {
  return (
    <li onClick={() => onSelectedMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
