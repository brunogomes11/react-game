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
            className="categories-Grid"
            spacing={3}
            sx={{ marginTop: "-200px", width: 700 }}
        >
            {categories.map((category) => (
                <Grid item key={category.value} xs={4}>
                    <Card
                        sx={{
                            height: 100,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ButtonBase
                            onClick={() => handleCategorySelect(category.value)}
                            sx={{ width: "100%", height: "100%" }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
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
