import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";
import Quiz from "./Quiz";
import SelectCategory from "./SelectCategory.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import Scoreboard from "./Scoreboard.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [categoryId, setCategoryId] = useState(null);

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
                                <SelectCategory
                                    onCategorySelected={setCategoryId}
                                />
                            ) : (
                                <Quiz categoryId={categoryId} />
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
