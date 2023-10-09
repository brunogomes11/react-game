import Quiz from "./Quiz";
import { jsQuiz } from "./constant";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Quiz questions={jsQuiz.questions} />
    </ThemeProvider>
  );
}

export default App;
