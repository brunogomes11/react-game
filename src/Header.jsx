import { Link } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
        <Box>
            <AppBar position="static" sx={{ mb: "2rem" }}>
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    {/* logo here */}
                    <Typography variant="h6" color="inherit" component="div">
                        ArcadeMaster
                    </Typography>
                    <Link to="/scoreboard">Scoreboard</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
