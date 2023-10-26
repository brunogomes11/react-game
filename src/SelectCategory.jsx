/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useState } from "react";

import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    ButtonBase,
} from "@mui/material";

// insert img into each card using CardMedia, CardContent for the Typography, CardActions for the btn
function SelectCategory({ onCategorySelected }) {
    const handleCategorySelect = (categoryId) => {
        onCategorySelected(categoryId);
    };

    const categories = [
        { value: 15, label: "Video Game" },
        { value: 14, label: "Film" },
        { value: 10, label: "Books" },
        { value: 18, label: "Computer Science" },
        { value: 19, label: "Mathematics" },
        { value: 22, label: "Geography" },
        { value: 25, label: "Arts" },
        { value: 9, label: "General Knowledge" },
        { value: 17, label: "Science & Nature" },
    ];

    return (
        <Grid
            container
            data-testid="categories-Grid"
            className="categories-Grid"
            spacing={3}
            sx={{
                marginTop: {
                    md: 5,
                    lg: 10,
                    xll: 15,
                    xlll: 20,
                },
                paddingLeft: {
                    md: 3,
                    xl: 5,
                },
            }}
        >
            {categories.map((category) => (
                <Grid item key={category.value} xs={4}>
                    <Card
                        sx={{
                            height: "100%",
                            minHeight: "5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(255, 255, 255, 0.25)",
                            borderRadius: ".2rem",
                        }}
                    >
                        <ButtonBase
                            onClick={() => handleCategorySelect(category.value)}
                            sx={{ width: "100%", height: "100%" }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="white"
                                    gutterBottom
                                >
                                    {category.label}
                                </Typography>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default SelectCategory;
