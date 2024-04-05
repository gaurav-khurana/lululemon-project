import "./App.scss";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import QuizPage1 from "./pages/QuizPage1/QuizPage1";
import QuizPage2 from "./pages/QuizPage2/QuizPage2";
import QuizPage3 from "./pages/QuizPage3/QuizPage3";
import QuizPage4 from "./pages/QuizPage4/QuizPage4";
import QuizPage5 from "./pages/QuizPage5/QuizPage5";
import Results from "./pages/Results/Results";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/1" element={<QuizPage1 />} />
          <Route path="/quiz/2" element={<QuizPage2 />} />
          <Route path="/quiz/3" element={<QuizPage3 />} />
          <Route path="/quiz/4" element={<QuizPage4 />} />
          <Route path="/quiz/5" element={<QuizPage5 />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
