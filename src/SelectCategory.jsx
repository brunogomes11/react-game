import React from "react";
import { Card, Typography, Button, Grid, Box } from "@mui/material";

// insert img into each card using CardMedia, CardContent for the Typography, CardActions for the btn
function SelectCategory() {
  return (
    <Box>
      <Grid
        container
        className="categories-Grid"
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item className="category" xs={6} sm={4}>
          <Card value={15} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Video Game
            </Typography>
            <Button size="small">Play</Button>{" "}
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={11} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Film{" "}
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={10} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Books
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={18} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Computer Science{" "}
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={19} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Mathematics{" "}
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={22} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Geography{" "}
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={25} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Arts{" "}
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={9} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              General Knowledge{" "}
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>

        <Grid item className="category" xs={6} sm={4}>
          <Card value={17} color="white">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Sciende & Nature{" "}
            </Typography>
            <Button size="small">Play</Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SelectCategory;
