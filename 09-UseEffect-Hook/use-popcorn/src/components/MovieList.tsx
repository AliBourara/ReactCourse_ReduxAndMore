import { MoviesType } from "../Data";
import { Movie } from "./Movie";

interface MovieListViewProp {
  movies: MoviesType[];
  onSelectedMovie: (id: string) => void;
}
export function MovieList({ movies, onSelectedMovie }: MovieListViewProp) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </ul>
  );
}
