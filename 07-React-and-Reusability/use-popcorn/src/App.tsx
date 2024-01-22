import { ReactNode, useState } from "react";
import { MoviesType, tempMovieData, tempWatchedData } from "./Data";

const average = (arr: (number | undefined)[]) =>
  arr.reduce((acc, cur, i, arr) => (acc ?? 0) + (cur ?? 0) / arr.length, 0);

export default function App() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar>
        <Search />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}

interface NavBarViewProp {
  children: ReactNode;
}

function NavBar({ children }: NavBarViewProp) {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
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
  children: ReactNode;
}

function Main({ children }: MainViewProp) {
  return <main className="main">{children}</main>;
}

interface ListBoxViewProp {
  children: ReactNode;
}

function Box({ children }: ListBoxViewProp) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
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
