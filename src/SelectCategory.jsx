/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useState } from "react";

import { Card, Typography, Grid, Box, ButtonBase } from "@mui/material";

// insert img into each card using CardMedia, CardContent for the Typography, CardActions for the btn
function SelectCategory({ onCategorySelected }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
        onCategorySelected(categoryId);
    };
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
                        <ButtonBase onClick={() => handleCategorySelect(15)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Video Game
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={11} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(14)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Film{" "}
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={10} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(10)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Books
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={18} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(18)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Computer Science{" "}
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={19} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(19)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Mathematics{" "}
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={22} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(22)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Geography{" "}
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={25} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(25)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Arts{" "}
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={9} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(9)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                General Knowledge{" "}
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>

                <Grid item className="category" xs={6} sm={4}>
                    <Card value={17} color="white">
                        <ButtonBase onClick={() => handleCategorySelect(17)}>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Science & Nature{" "}
                            </Typography>
                        </ButtonBase>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SelectCategory;
