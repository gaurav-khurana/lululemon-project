import { Link } from "react-router-dom";
import ProgressBarWithLabel from "../../components/ProgressBar/ProgressBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import "../QuizPage1/QuizPage1.scss";
import formData from "../../assets/data/form-data.json";

function QuizPage3() {
  const formData3 = formData[2];
  const activeValue3 = 60;

  return (
    <>
      <main className="quiz-container">
        <section className="quiz">
          <div className="progress-bar">
            <ProgressBarWithLabel activeValue3={activeValue3} />
          </div>

          <h2 className="question">{formData3.question}</h2>
          <h3 className="question__text">Select 1</h3>

          <QuizForm formData3={formData3} />
          {/* setResultArray={setResultArray} */}

          <div className="btn-container">
            <Link to="/">
              <button className="quiz__btn quiz__btn--cancel" type="submit">
                Cancel
              </button>
            </Link>

            <Link to="/quiz/4">
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

export default QuizPage3;
