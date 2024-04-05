import { Link } from "react-router-dom";
import ProgressBarWithLabel from "../../components/ProgressBar/ProgressBar";
import QuizForm from "../../components/QuizForm/QuizForm";
import "./QuizPage1.scss";
import formData from "../../assets/data/form-data.json";
// import { useState } from "react";

function QuizPage1() {
  const formData1 = formData[0];
  const activeValue1 = 20;

  // const [resultArray, setResultArray] = useState([]);

  // function handleForm(event) {
  //   event.preventDefault();
  //   console.log(event.target.form);

  // }

  return (
    <>
      <main className="quiz-container">
        <section className="quiz">
          <div className="progress-bar">
            <ProgressBarWithLabel activeValue1={activeValue1} />
          </div>

          <h2 className="question">{formData1.question}</h2>
          <h3 className="question__text">Select 1</h3>

          <QuizForm formData1={formData1} />
          {/* setResultArray={setResultArray} */}

          <div className="btn-container">
            <Link to="/">
              <button className="quiz__btn quiz__btn--cancel" type="submit">
                Cancel
              </button>
            </Link>

            <Link to="/quiz/2">
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

export default QuizPage1;
