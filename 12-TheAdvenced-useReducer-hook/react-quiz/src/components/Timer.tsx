import { useEffect } from "react";
import { AppActionType } from "./App";

interface TimerPropType {
  secondsRemaining: number;
  dispatch: React.Dispatch<AppActionType>;
}

function Timer({ dispatch, secondsRemaining }: TimerPropType) {
  const mins: number = Math.floor(secondsRemaining / 60);
  const seconds: number = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
