import { useEffect, useState } from "react";
import { MoviesType } from "./Data";
import { KEY } from "./App";

export function useMovie(query: string, handelCloseMovie: () => void) {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie Not Found");
          setMovies(data.Search);
          setError("");
        } catch (err: any) {
          setError(err.message);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      handelCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  ); // [] => Is A dependency Array

  return { movies, isLoading, error };
}
