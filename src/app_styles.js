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
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    padding: "0 50px",
                    height: "100vh",
                    backgroundPosition: "center",
                },
            },
        },
    },
});

export const linkStyles = { textDecoration: "none", color: "inherit" };

export const arcadeInterfaceStyles = {
    backgroundColor: "#23143c",
    backgroundSize: "cover",
    width: "1200px",
};
