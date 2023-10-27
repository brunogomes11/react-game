import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    xll: 1850,
    xlll: 2200,
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: "Nintendo",
    fontSize: 25,
  },
  breakpoints: breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Nintendo",
          src: `url('SnesItalic-1G9Be.ttf') format('truetype')`,
        },
        body: {
          backgroundColor: "#23143c",
          backgroundImage: `
                    url("/arcadeInterfaceEdited.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          [`@media (min-width: ${breakpoints.values.xs}px)`]: {
            backgroundImage: `
                        url("/background.jpeg")`,
          },
          [`@media (min-width: ${breakpoints.values.md}px)`]: {
            backgroundImage: `
                    url("/arcadeInterfaceEdited.png")`,
          },
          [`@media (min-width: ${breakpoints.values.xll}px)`]: {
            backgroundSize: "contain, cover",
          },
          [`@media (min-width: ${breakpoints.values.xlll}px)`]: {
            backgroundSize: "contain, cover",
          },
        },
      },
    },
  },
});

export const linkStyles = {
  textDecoration: "none",
  color: "inherit",
};
