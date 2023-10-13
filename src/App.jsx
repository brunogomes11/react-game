import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./app_styles.js";
import Quiz from "./Quiz";
import SelectCategory from "./SelectCategory.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <SelectCategory />
      {/* <Quiz /> */}
    </ThemeProvider>
  );
}

export default App;
