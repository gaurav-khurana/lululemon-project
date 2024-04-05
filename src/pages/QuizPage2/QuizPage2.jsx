import { Link } from "react-router-dom";
import ProgressBarWithLabel from "../../components/ProgressBar/ProgressBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import "../QuizPage1/QuizPage1.scss";
import formData from "../../assets/data/form-data.json";

function QuizPage2() {
  const formData2 = formData[1];
  const activeValue2 = 40;

  return (
    <>
      <main className="quiz-container">
        <div className="progress-bar">
          <ProgressBarWithLabel activeValue2={activeValue2} />
        </div>

        <h2 className="question">{formData2.question}</h2>

        <QuizForm formData2={formData2} />

        <Link to="/">
          <button type="submit">Cancel</button>
        </Link>

        <Link to="/quiz/3">
          <button type="submit">Next</button>
        </Link>
      </main>
    </>
  );
}

export default QuizPage2;
