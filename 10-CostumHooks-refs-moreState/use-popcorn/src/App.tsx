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
import { useMovie } from "./useMovie";
import { useLocalStorageState } from "./useLocalStorageState";

export const average = (arr: (number | undefined)[]) =>
  arr.reduce((acc, cur, i, arr) => (acc ?? 0) + (cur ?? 0) / arr.length, 0);
export const KEY: string = "cad78610";

export default function App() {
  const [query, setQuery] = useState("matrix");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { movies, isLoading, error } = useMovie(query, handelCloseMovie);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handelSelectedMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handelCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: MoviesType) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleRemoveWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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
