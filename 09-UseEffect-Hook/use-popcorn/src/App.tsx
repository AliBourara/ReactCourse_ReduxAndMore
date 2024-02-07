import { useEffect, useState } from "react";
import { MoviesType, tempMovieData, tempWatchedData } from "./Data";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { WatchedList } from "./components/WatchedList";
import { WatchedSummary } from "./components/WatchedSummary";
import { MovieList } from "./components/MovieList";
import Box from "./components/Box";
import { Main } from "./components/Main";
import { NumResult } from "./components/NumResult";
import { Search } from "./components/Search";
import { NavBar } from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";

export const average = (arr: (number | undefined)[]) =>
  arr.reduce((acc, cur, i, arr) => (acc ?? 0) + (cur ?? 0) / arr.length, 0);
export const KEY: string = "cad78610";

export default function App() {
  const [query, setQuery] = useState("matrix");
  const [watched, setWatched] = useState<MoviesType[]>([]);
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handelSelectedMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handelCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: MoviesType) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleRemoveWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectedMovie={handelSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              setSetSelectedId={setSelectedId}
              onCloseMovie={handelCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                onRemoveWatched={handleRemoveWatched}
                watched={watched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
