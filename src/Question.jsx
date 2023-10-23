/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Typography, List, ListItemButton, Grid } from "@mui/material";

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
        <>
            <Typography color="white" variant="h6">
                {/* displays the question */}
                {currentQuestion.question}
            </Typography>
            <Grid container spacing={2} marginTop="30px">
                {/* list the answer choices */}
                {currentQuestion.choices.map((choice, index) => (
                    <Grid
                        item
                        xs={6}
                        //   callback to check if answer is correct/wrong
                        onClick={() => onAnswerClick(choice)}
                        key={index}
                        disabled={isAnswered}
                        sx={{
                            backgroundColor:
                                answer === choice
                                    ? "secondary.main"
                                    : "transparent",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "primary.light",
                            },
                        }}
                    >
                        {choice}
                    </Grid>
                ))}
            </Grid>

            {isAnswered && (
                <Typography
                    variant="h6"
                    sx={{ color: isCorrect ? "green" : "red" }}
                >
                    {feedback}
                </Typography>
            )}
        </>
    );
};

export default Question;
