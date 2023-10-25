/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Typography, Grid, Box, Button } from "@mui/material";

const Question = ({
    nextQuestion,
    currentQuestion,
    updateScoreState,
    decrementLives,
    resetTimer,
}) => {
    const [answer, setAnswer] = useState(null); //set answer to true if its the right one

    const isCorrect = answer === currentQuestion.correct_answer;
    // const feedback = isCorrect ? "You got it right!" : "Wrong answer!";
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
                alignItems: "center",
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
                    <Grid item xs={6} key={index}>
                        <Button
                            //   callback to check if answer is correct/wrong
                            onClick={() => onAnswerClick(choice)}
                            sx={{
                                color: "white",
                                width: "80%",
                                height: "80%",
                                backgroundColor:
                                    answer === choice
                                        ? "success"
                                        : "transparent",

                                "&:hover": {
                                    backgroundColor: "secondary.dark",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            <Typography variant="body2" gutterBottom>
                                {choice}
                            </Typography>
                        </Button>
                    </Grid>
                ))}
            </Grid>

            <Grid
                item
                className="feedback"
                sx={{
                    position: "absolute",
                    width: "15rem",
                    height: "15rem",
                    padding: "0",
                }}
            >
                {/* {isAnswered && (
          <Typography variant="h6" sx={{ color: isCorrect ? "green" : "red" }}>
            {feedback}
          </Typography>
        )} */}

                {isAnswered &&
                    (isCorrect ? (
                        <Box
                            sx={{
                                backgroundImage: `
                    url("/correctAnswer.png")`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: "100%",
                                width: "100%",
                                backgroundColor: "rgba(0, 128, 0, 0.25)",
                                borderRadius: ".2rem",
                            }}
                        ></Box>
                    ) : (
                        <Box
                            sx={{
                                backgroundImage: `
                url("/wrongAnswer.png")`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: "100%",
                                width: "100%",
                                backgroundColor: "rgba(255, 0, 0, 0.25)",
                                borderRadius: ".2rem",
                            }}
                        ></Box>
                    ))}
            </Grid>
        </Grid>
    );
};

export default Question;
