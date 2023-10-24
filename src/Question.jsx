/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Typography, Grid } from "@mui/material";

const Question = ({
    nextQuestion,
    currentQuestion,
    updateScoreState,
    decrementLives,
    resetTimer,
}) => {
    const [answer, setAnswer] = useState(null); //set answer to true if its the right one

    const isCorrect = answer === currentQuestion.correct_answer;
    const feedback = isCorrect ? "You got it right!" : "Wrong answer!";
    const isAnswered = answer !== null;

    // callback triggered when player selects an answer
    const onAnswerClick = (choice) => {
        // updates the element style
        setAnswer(choice);

        // checks if answer is correct
        if (choice === currentQuestion.correct_answer) {
            updateScoreState();
            resetTimer();
        } else {
            decrementLives();
        }

        //Move to next question
        nextQuestion();
    };

    useEffect(() => {
        setAnswer(null);
    }, [currentQuestion]);

    return (
        <Grid
            className="questionComponent"
            container
            spacing={1}
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid item className="question">
                <Typography color="white" variant="h6" align="center">
                    {/* displays the question */}
                    {currentQuestion.question}
                </Typography>
            </Grid>

            <Grid
                item
                className="choices"
                container
                spacing={2}
                marginTop="30px"
                align="center"
                sx={{
                    pointerEvents: !isAnswered ? "auto" : "none",
                }}
            >
                {/* list the answer choices */}
                {currentQuestion.choices.map((choice, index) => (
                    <Grid
                        item
                        xs={6}
                        //   callback to check if answer is correct/wrong
                        onClick={() => onAnswerClick(choice)}
                        key={index}
                        sx={{
                            backgroundColor:
                                answer === choice
                                    ? "secondary.main"
                                    : "transparent",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "primary.light",
                            },
                            justifyContent: "center",
                        }}
                    >
                        {choice}
                    </Grid>
                ))}
            </Grid>

            <Grid item className="feedback">
                {isAnswered && (
                    <Typography
                        variant="h6"
                        sx={{ color: isCorrect ? "green" : "red" }}
                    >
                        {feedback}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default Question;
