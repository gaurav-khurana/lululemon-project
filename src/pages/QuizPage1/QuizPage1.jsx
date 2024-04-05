import { Link } from "react-router-dom";
import ProgressBarWithLabel from "../../components/ProgressBar/ProgressBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import "./QuizPage1.scss";
import formData from "../../assets/data/form-data.json";

function QuizPage1() {
  const formData1 = formData[0];
  const activeValue1 = 20;

  return (
    <>
      <main className="quiz-container">
        <div className="progress-bar">
          <ProgressBarWithLabel activeValue1={activeValue1} />
        </div>

        <h2 className="question">{formData1.question}</h2>

        <QuizForm formData1={formData1} />

        <Link to="/">
          <button type="submit">Cancel</button>
        </Link>

        <Link to="/quiz/2">
          <button type="submit">Next</button>
        </Link>
      </main>
    </>
  );
}

export default QuizPage1;
