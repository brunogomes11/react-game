import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";
import Quiz from "./Quiz";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Quiz />
    </ThemeProvider>
  );
}

export default App;
