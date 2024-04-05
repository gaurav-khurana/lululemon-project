import { Link } from "react-router-dom";
import ProgressBarWithLabel from "../../components/ProgressBar/ProgressBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import "../QuizPage1/QuizPage1.scss";
import formData from "../../assets/data/form-data.json";

function QuizPage4() {
  const formData4 = formData[3];
  const activeValue4 = 80;

  return (
    <>
      <main className="quiz-container">
        <div className="progress-bar">
          <ProgressBarWithLabel activeValue4={activeValue4} />
        </div>

        <h2 className="question">{formData4.question}</h2>

        <QuizForm formData4={formData4} />

        <Link to="/">
          <button type="submit">Cancel</button>
        </Link>

        <Link to="/quiz/5">
          <button type="submit">Next</button>
        </Link>
      </main>
    </>
  );
}

export default QuizPage4;
