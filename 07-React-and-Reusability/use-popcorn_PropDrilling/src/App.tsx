import { useState } from "react";
import { MoviesType, tempMovieData, tempWatchedData } from "./Data";

const average = (arr: (number | undefined)[]) =>
  arr.reduce((acc, cur, i, arr) => (acc ?? 0) + (cur ?? 0) / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}

interface NavBarViewProp {
  movies: MoviesType[];
}

function NavBar({ movies }: NavBarViewProp) {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResult movies={movies} />
      </nav>
    </>
  );
}
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

interface NumResultViewProp {
  movies: MoviesType[];
}
function NumResult({ movies }: NumResultViewProp) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

interface MainViewProp {
  movies: MoviesType[];
}

function Main({ movies }: MainViewProp) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}

interface ListBoxViewProp {
  movies: MoviesType[];
}

function ListBox({ movies }: ListBoxViewProp) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
}

interface MovieListViewProp {
  movies: MoviesType[];
}

function MovieList({ movies }: MovieListViewProp) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

interface MovieViewProps {
  movie: MoviesType;
}

function Movie({ movie }: MovieViewProps) {
  return (
    <li>
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

function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}

interface WatchedSummaryViewProp {
  watched: MoviesType[];
}

function WatchedSummary({ watched }: WatchedSummaryViewProp) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

interface WatchedListViewProp {
  watched: MoviesType[];
}

function WatchedList({ watched }: WatchedListViewProp) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieList movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

interface WatchedListMovieViewProp {
  movie: MoviesType;
}

function WatchedMovieList({ movie }: WatchedListMovieViewProp) {
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
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
