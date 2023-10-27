import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { linkStyles, theme } from "./app_styles";

export default function Header() {
  return (
    <Box
      sx={{
        marginTop: { xl: "-2rem", lg: "-5rem" },
      }}
    >
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Link
            to="/"
            style={{
              ...linkStyles,
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => setCategoryId(null)}
          >
            <img
              src="./arcadeMaster1.png"
              alt="Arcade Master"
              style={{
                // height:50,
                width: "80%",
              }}
            />
          </Link>
          <Link
            to="/scoreboard"
            style={{
              ...linkStyles,
              fontSize: "1.1rem",
            }}
          >
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  mb: "1rem",
                },
              }}
            >
              Scoreboard
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
