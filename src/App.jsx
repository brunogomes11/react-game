import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";
import Quiz from "./Quiz";
import SelectCategory from "./SelectCategory.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import Scoreboard from "./Scoreboard.jsx";
import Countdown from "react-countdown";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [categoryId, setCategoryId] = useState(null);
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  //   renderer is used to edit how the Countdown displays the time
  const renderer = ({ seconds }) => {
    let countadownStyles = { color: "white" };
    if (seconds <= 10) {
      countadownStyles = { color: "yellow" };
    }
    if (seconds <= 5) {
      countadownStyles = { color: "red" };
    }
    return <div style={countadownStyles}>{seconds} seconds</div>;
  };

  //   Countdown library
  const timer = (
    <Countdown
      date={Date.now() + 15000}
      onComplete={() => timeUp()}
      renderer={renderer}
    />
  );
  // called when the countdown ends
  const timeUp = () => {
    setOpen(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              isGameOver ? (
                <Scoreboard score={score} isGameOver={isGameOver} />
              ) : !categoryId ? (
                <SelectCategory onCategorySelected={setCategoryId} />
              ) : (
                <Quiz
                  categoryId={categoryId}
                  timer={timer}
                  setOpen={setOpen}
                  open={open}
                  score={score}
                  setScore={setScore}
                  setIsGameOver={setIsGameOver}
                />
              )
            }
          />

          <Route
            path="/scoreboard"
            element={<Scoreboard score={score} isGameOver={isGameOver} />}
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
