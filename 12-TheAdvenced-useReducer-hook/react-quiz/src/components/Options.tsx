import { QuestionsType } from "../../data/data";
import { AppActionType } from "./App";

interface OptionsPropType {
  question: QuestionsType;
  dispatch: React.Dispatch<AppActionType>;
  answer: number | null;
}

function Options({ question, dispatch, answer }: OptionsPropType) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
