import { AppActionType } from "./App";

interface NextButtonPropType {
  answer: number | null;
  dispatch: React.Dispatch<AppActionType>;
  currentQuestionIndex: number;
  numQuestions: number;
}

function NextButton({
  dispatch,
  answer,
  currentQuestionIndex,
  numQuestions,
}: NextButtonPropType) {
  const handleClick = () => {
    if (currentQuestionIndex + 1 < numQuestions)
      dispatch({ type: "nextQuestion" });
    else dispatch({ type: "finish" });
  };

  if (answer === null) return null;
  else {
    return (
      <button className="btn btn-ui" onClick={handleClick}>
        Next
      </button>
    );
  }
}

export default NextButton;
