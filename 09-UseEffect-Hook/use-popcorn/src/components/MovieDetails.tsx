import { useEffect, useState } from "react";
import { KEY } from "../App";
import { MoviesType } from "../Data";
import StarsRating from "./StarsRating";
import Loader from "./Loader";

interface MovieDetailsViewProps {
  selectedId: string;
  setSetSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  onCloseMovie: () => void;
  onAddWatched: (movie: MoviesType) => void;
  watched: MoviesType[];
}

const MovieDetails = ({
  selectedId,
  setSetSelectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: MovieDetailsViewProps) => {
  const [movie, setMovie] = useState<MoviesType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState<number | undefined>(undefined);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  function handelAdd() {
    const newWatchedMovie: MoviesType = {
      imdbID: selectedId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime?.toString().split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  useEffect(
    function () {
      function callBack(e: KeyboardEvent) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }
      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },

    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!movie) return;
      document.title = `Movie | ${movie?.Title}`;
      return function () {
        document.title = "usePopcorn";
      };
    },
    [movie]
  );

  if (!movie) return null;
  const {
    Title,
    Year,
    Poster,
    Runtime,
    imdbRating,
    Plot,
    Released,
    Actors,
    Director,
    Genre,
  } = movie;

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
              {/* &larr; html entiry for left arrow*/}
            </button>
            <img src={Poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarsRating
                    maxRating={10}
                    size={25}
                    onSetRating={setUserRating}
                  />
                  {userRating && (
                    <button className="btn-add" onClick={handelAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  This Movie Is Already Rated : <span>🌟</span>{" "}
                  {watchedUserRating}
                </p>
              )}
            </div>

            <p>
              <em>{Plot}</em>
            </p>
            <p>Starting : {Actors}</p>
            <p>Directed By {Director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
