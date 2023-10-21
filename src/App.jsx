import { useState, useRef, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";
import Quiz from "./Quiz";
import SelectCategory from "./SelectCategory";
import Header from "./Header";
import Footer from "./Footer";
import Scoreboard from "./Scoreboard";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

function App() {
  const [categoryId, setCategoryId] = useState(null);
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lives, setLives] = useState(5);

  const decrementLives = () => {
    setLives((prevLives) => {
      const updatedLives = prevLives - 1;
      if (updatedLives <= 0) {
        setOpen(true);

        setOpen(true);
        setTimeout(() => {
          setIsGameOver(true);
        }, 2000); // wait for 1 second or adjust as needed
        return 0;
      }
      return updatedLives;
    });
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
                  setOpen={setOpen}
                  open={open}
                  score={score}
                  setScore={setScore}
                  setIsGameOver={setIsGameOver}
                  lives={lives}
                  setLives={setLives}
                  decrementLives={decrementLives}
                  // timer={timer}
                  // resetTimer={resetTimer}
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
