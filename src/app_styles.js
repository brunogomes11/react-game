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
    fontFamily: "Pixel",
  },
  breakpoints: breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Pixel",
          src: `url('PublicPixel-z84yD.ttf') format('truetype')`,
        },
        body: {
          backgroundColor: "#23143c",
          backgroundImage: `
                    url("/arcade_interface_wide3.png")`,
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
          [`@media (min-width: ${breakpoints.values.sm}px)`]: {
            backgroundImage: `
                    url("/arcade_interface_wide3.png")`,
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
