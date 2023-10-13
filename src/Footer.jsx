import React from "react";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box>
      <AppBar position="static" sx={{ mt: "2rem" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" component="div">
            Developed by
          </Typography>

          <List
            component="ul"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <ListItem component="li" disablePadding>
              <LinkedInIcon sx={{ ml: ".5rem", mr: ".5rem" }} />
              <ListItemText>
                <a
                  href="https://www.linkedin.com/in/joao-murara/"
                  target="_blank"
                >
                  Joao Murara
                </a>
              </ListItemText>
            </ListItem>
            <ListItem component="li" disablePadding>
              <LinkedInIcon sx={{ ml: ".5rem", mr: ".5rem" }} />
              <ListItemText>
                <a
                  href="https://www.linkedin.com/in/brunogomes11/"
                  target="_blank"
                >
                  Bruno Gomes
                </a>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
