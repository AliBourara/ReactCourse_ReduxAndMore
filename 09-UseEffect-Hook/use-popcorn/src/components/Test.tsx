import { useState } from "react";
import StarsRating from "./StarsRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState<number>(0);
  return (
    <>
      <StarsRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie Was Rated {movieRating} Stars</p>
    </>
  );
};

export default Test;
