import "./App.scss";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage1 from "./pages/QuizPage1/QuizPage1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/1" element={<QuizPage1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
