import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import { linkStyles } from "./app_styles";

export default function Header() {
    return (
        <Box>
            <AppBar position="static" sx={{ background: "transparent" }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Link
                        to="/"
                        style={linkStyles}
                        onClick={() => setCategoryId(null)}
                    >
                        <img
                            src="./arcadeMaster1.png"
                            alt="Arcade Master"
                            height={50}
                            width={400}
                        />
                    </Link>
                    <Link to="/scoreboard" style={linkStyles}>
                        Scoreboard
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
