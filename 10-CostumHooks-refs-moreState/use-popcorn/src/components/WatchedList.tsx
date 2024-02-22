import { MoviesType } from "../Data";
import { WatchedMovieList } from "./WatchedMovieList";

interface WatchedListViewProp {
  watched: MoviesType[];
  onRemoveWatched: (id: string) => void;
}
export function WatchedList({ watched, onRemoveWatched }: WatchedListViewProp) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieList
          movie={movie}
          key={movie.imdbID}
          onRemoveWatched={onRemoveWatched}
        />
      ))}
    </ul>
  );
}
