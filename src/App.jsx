import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";
import Quiz from "./Quiz";
import SelectCategory from "./SelectCategory";
import Header from "./Header";
import Footer from "./Footer";
import Scoreboard from "./Scoreboard";
import Spinner from "./Spinner.jsx";

function App() {
    const [categoryId, setCategoryId] = useState(null);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const handleCategorySelection = (selectedCategory) => {
        setIsLoading(true); // Start loading

        setCategoryId(selectedCategory);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header />
                <Spinner open={isLoading} />

                <Routes>
                    <Route
                        path="/"
                        element={
                            isGameOver ? (
                                <Scoreboard
                                    score={score}
                                    isGameOver={isGameOver}
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />
                            ) : !categoryId ? (
                                <SelectCategory
                                    onCategorySelected={handleCategorySelection}
                                />
                            ) : (
                                <Quiz
                                    categoryId={categoryId}
                                    score={score}
                                    setScore={setScore}
                                    setIsGameOver={setIsGameOver}
                                    setIsLoading={setIsLoading}
                                />
                            )
                        }
                    />

                    <Route
                        path="/scoreboard"
                        element={
                            <Scoreboard
                                score={score}
                                isGameOver={isGameOver}
                                isLoading={isLoading}
                                setIsLoading={setIsLoading}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
