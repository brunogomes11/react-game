import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
          padding: "0 50px",
          height: "100vh",
        },
      },
    },
  },
});

export const linkStyles = { textDecoration: "none", color: "inherit" };
