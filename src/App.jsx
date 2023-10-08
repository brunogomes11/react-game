import Quiz from "./Quiz";
import { jsQuiz } from "./constant";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

//Set a base CSS for BODY
const theme = createTheme({
    typography: {
        fontFamily: "Pixel",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "@font-face": {
                    fontFamily: "Pixel",
                    src: `url('PublicPixel-z84yD.ttf') format('truetype')`,
                },
                body: {
                    backgroundColor: "#23143c",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    padding: "0 30px",
                    height: "100vh",
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Quiz questions={jsQuiz.questions} />
        </ThemeProvider>
    );
}

export default App;
