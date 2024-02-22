import { MoviesType } from "../Data";

interface NumResultViewProp {
  movies: MoviesType[];
}
export function NumResult({ movies }: NumResultViewProp) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
