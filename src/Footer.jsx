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
import { linkStyles } from "./app_styles";

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
              <ListItemText>
                <a
                  href="https://www.linkedin.com/in/joao-murara/"
                  target="_blank"
                  style={linkStyles}
                >
                  Joao Murara
                </a>
              </ListItemText>
              <LinkedInIcon sx={{ ml: ".5rem", mr: ".5rem" }} />
            </ListItem>
            <ListItem component="li" disablePadding>
              <ListItemText>
                <a
                  href="https://www.linkedin.com/in/brunogomes11/"
                  target="_blank"
                  style={linkStyles}
                >
                  Bruno Gomes
                </a>
              </ListItemText>
              <LinkedInIcon sx={{ ml: ".5rem", mr: ".5rem" }} />
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
