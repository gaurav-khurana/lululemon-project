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
        <section className="quiz">
          <div className="progress-bar">
            <ProgressBarWithLabel activeValue4={activeValue4} />
          </div>

          <h2 className="question">{formData4.question}</h2>
          <h3 className="question__text">Select 1</h3>

          <QuizForm formData4={formData4} />
          {/* setResultArray={setResultArray} */}

          <div className="btn-container">
            <Link to="/">
              <button className="quiz__btn quiz__btn--cancel" type="submit">
                Cancel
              </button>
            </Link>

            <Link to="/quiz/5">
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

export default QuizPage4;
