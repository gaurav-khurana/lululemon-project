import { Link } from "react-router-dom";
import ProgressBarWithLabel from "../../components/ProgressBar/ProgressBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import "./QuizPage1.scss";

function QuizPage1() {
  return (
    <>
      <main className="quiz-container">
        <div className="progress-bar">
          <ProgressBarWithLabel />
        </div>
        <h2 className="question">What is your favourite Lululemon product?</h2>
        <QuizForm />
        How do you identify yourself?
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
