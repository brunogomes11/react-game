import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";
import Quiz from "./Quiz";
import SelectCategory from "./SelectCategory.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";

function App() {
    const [categoryId, setCategoryId] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {!categoryId ? (
                <SelectCategory onCategorySelected={setCategoryId} />
            ) : (
                <Quiz categoryId={categoryId} />
            )}
            <Footer />
        </ThemeProvider>
    );
}

export default App;
