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

  const timer = (
    <Countdown date={Date.now() + 5000} onComplete={() => timeUp()} />
  );

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
              !categoryId ? (
                <SelectCategory onCategorySelected={setCategoryId} />
              ) : (
                <Quiz
                  categoryId={categoryId}
                  timer={timer}
                  setOpen={setOpen}
                  open={open}
                />
              )
            }
          />

          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
