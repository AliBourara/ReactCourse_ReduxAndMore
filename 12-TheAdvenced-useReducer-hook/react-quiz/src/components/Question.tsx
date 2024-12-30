import { QuestionsType } from "../../data/data";
import { AppActionType } from "./App";
import Options from "./Options";

interface QuestionpPropType {
  question: QuestionsType;
  dispatch: React.Dispatch<AppActionType>;
  answer: number | null;
}

function Question({ question, dispatch, answer }: QuestionpPropType) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
