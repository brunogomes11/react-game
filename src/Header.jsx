import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { linkStyles } from "./app_styles";

export default function Header() {
  return (
    <Box>
      <AppBar position="static" sx={{ mb: "2rem" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={linkStyles} onClick={() => setCategoryId(null)}>
            ArcadeMaster
          </Link>
          <Link to="/scoreboard" style={linkStyles}>
            Scoreboard
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
