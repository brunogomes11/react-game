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
                    backgroundImage: `
                    url("/arcade_interface2.png"),
                    url("/background.jpeg")`,
                    backgroundSize: "contain, cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    padding: "0 50px",
                    height: "100vh",
                    minHeight: "600px",
                },
            },
        },
    },
});

export const linkStyles = { textDecoration: "none", color: "inherit" };
