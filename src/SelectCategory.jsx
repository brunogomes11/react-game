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
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
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
        <Box>
            <Grid
                container
                className="categories-Grid"
                rowSpacing={5}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {categories.map((category) => (
                    <Grid item key={category.value} xs={6} sm={4}>
                        <Card
                            sx={{
                                height: 100,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <ButtonBase
                                onClick={() =>
                                    handleCategorySelect(category.value)
                                }
                                style={{ width: "100%", height: "100%" }}
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
        </Box>
    );
}

export default SelectCategory;
