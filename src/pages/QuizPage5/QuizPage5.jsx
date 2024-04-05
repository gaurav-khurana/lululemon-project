import { Link } from "react-router-dom";
import ProgressBarWithLabel from "../../components/ProgressBar/ProgressBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import "../QuizPage1/QuizPage1.scss";
import formData from "../../assets/data/form-data.json";

function QuizPage5() {
  const formData5 = formData[4];
  const activeValue5 = 100;

  return (
    <>
      <main className="quiz-container">
        <section className="quiz">
          <div className="progress-bar">
            <ProgressBarWithLabel activeValue5={activeValue5} />
          </div>

          <h2 className="question">{formData5.question}</h2>
          <h3 className="question__text">Select 1</h3>

          <QuizForm formData5={formData5} />

          <div className="btn-container">
            <Link to="/">
              <button className="quiz__btn quiz__btn--cancel" type="submit">
                Cancel
              </button>
            </Link>

            <Link to="/results">
              <button className="quiz__btn" type="submit">
                Next
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default QuizPage5;
