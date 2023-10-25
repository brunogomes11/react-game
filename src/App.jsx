import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
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
            <Box
                sx={{
                    width: {
                        xs: "auto", //0px
                        sm: 600, //600px
                        md: 650, //900px
                        lg: 750, //1200px
                        xl: 800, //1536px
                        xll: 850, //1850px
                        xlll: 900, //2200px
                    },
                    height: {
                        xs: "auto", //0px
                        sm: 400, //600px
                        md: 450, //900px
                        lg: 500, //1200px
                        xl: 600, //1536px
                        xll: 700, //1850px
                        xlll: 700, // 2200px
                    },
                    // bgcolor: "rgba(255, 255, 255, 0.25)",
                    marginBottom: "150px",
                }}
            >
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
                                        onCategorySelected={
                                            handleCategorySelection
                                        }
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
                </Router>
                {/* <Footer /> */}
            </Box>
        </ThemeProvider>
    );
}

export default App;
