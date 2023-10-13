import React from "react";
import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <AppBar position="static" sx={{ mb: "2rem" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* logo here */}
          <Typography variant="h6" color="inherit" component="div">
            ArcadeMaster
          </Typography>
          <Button color="inherit">Score Board</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
