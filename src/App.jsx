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
            {/* Conditionally render components based on the categoryId state */}
            {/* When categoryId is null, the SelectCategory component will be shown. Once a category is selected and setCategoryId is called, categoryId will have a value and the Quiz component will be shown instead. */}
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
