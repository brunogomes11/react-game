/* eslint-disable react/prop-types */
import { useState } from "react";

import { Box, Typography, List, ListItem, Button } from "@mui/material";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null); //When someone click on the answer, we can track the index
    const [answer, setAnswer] = useState(null); //Set answer to true if its the right one
    const [feedback, setFeedback] = useState(null);

    const { question, choices, correctAnswer } = questions[currentQuestion];

    //Move to next question
    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const onAnswerClick = (answer, index) => {
        setAnswerIndex(index);

        if (answer === correctAnswer) {
            setFeedback("You got it right!");
            setAnswer(true);
        } else {
            setFeedback("Wrong answer!");
            setAnswer(false);
        }
    };

    return (
        //Box container = div with styles using sx
        <Box
            sx={{
                width: 700,
                backgroundColor: "#0c062e",
                borderRadius: 4,
                marginTop: 30,
                padding: "30px 60px",
                boxSizing: "border-box",
            }}
        >
            <Typography //Display the position of the question
                component="span"
                color="white"
                className="active-question-no"
            >
                {currentQuestion + 1}
            </Typography>

            <Typography //Display the total question
                component="span"
                color="white"
                className="total-question"
            >
                /{questions.length}
            </Typography>

            <Typography color="white" variant="h6">
                {question}
            </Typography>

            <List>
                {choices.map((choice, index) => (
                    <ListItem
                        onClick={() => onAnswerClick(choice, index)}
                        key={choice}
                        sx={{
                            backgroundColor:
                                answerIndex === index
                                    ? "secondary.main"
                                    : "transparent",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "primary.light",
                            },
                        }}
                    >
                        {choice}
                    </ListItem>
                ))}
            </List>

            <Typography variant="h6">{feedback}</Typography>

            <Button onClick={nextQuestion}>Next</Button>
        </Box>
    );
};

export default Quiz;