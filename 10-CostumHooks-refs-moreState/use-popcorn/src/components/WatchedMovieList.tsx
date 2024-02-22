import { MoviesType } from "../Data";

interface WatchedListMovieViewProp {
  movie: MoviesType;
  onRemoveWatched: (id: string) => void;
}
export function WatchedMovieList({
  movie,
  onRemoveWatched,
}: WatchedListMovieViewProp) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        {movie.Runtime ? (
          <p>
            <span>⏳</span>
            <span>{movie.Runtime} min</span>
          </p>
        ) : undefined}

        <button
          className="btn-delete"
          onClick={() => onRemoveWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
