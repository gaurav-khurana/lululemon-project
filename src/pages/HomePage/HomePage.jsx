import "./HomePage.scss";
// import lulu from '../../assets/images/luluHero.png'
// import QuizHero from "../../assets/images/quizhero.jpg";
import { Link } from "react-router-dom";
// import MainCard from '../../assets/images/MainCard.png'

function HomePage() {
  return (
    <>
      <main className="homepage__main">
        <div className="homepage__content">
          <h2 className="homepage__heading">
            Start your personalized experience by filling out our quick quiz.
          </h2>
          <Link to="/quiz/1">
            <button className="homepage__button">BEGIN QUIZ</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;
