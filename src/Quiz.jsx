/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import he from "he";
import Question from "./Question";
import GameHeader from "./GameHeader";
import { boxQuizBackground } from "./question_styles";
import { Box, Dialog, DialogTitle } from "@mui/material";

function Quiz({
    categoryId,
    open,
    setOpen,
    score,
    setScore,
    setIsGameOver,
    lives,
    decrementLives,
    timer,
    resetTimer,
}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //question index

    const [currentQuestion, setCurrentQuestion] = useState({
        question: "",
        choices: [],
        correct_answer: "",
    });

    // updates the state of the currentQuestionIndex. It is triggered by the nextQuestion call back in the question.jsx, after the player selects an answer. prevCount represents the previous state of the currentQuestionIndex
    const nextQuestion = () => {
        setTimeout(() => {
            setCurrentQuestionIndex((prevCount) => prevCount + 1);
        }, 1000);
    };

    // updates the score state. It is triggered by the onAnswerClick call back in the question.jsx when the player gets the answer correct
    const updateScoreState = () => {
        setScore(score + 10);
    };

    // fetch data to get questions. This need to move into the category component so the user can select the category of the questions
    useEffect(() => {
        axios
            .get(
                `https://opentdb.com/api.php?amount=1&category=${categoryId}&type=multiple`
            )
            .then((res) => {
                const currentData = res.data.results[0];

                // creates the possible answers arr containing all the incorrect + correct answer
                const possibleAnswers = [
                    // destructure the incorrect answers arr and add its elements to the possible answers arr
                    ...currentData.incorrect_answers,
                    // adds the correct answer to the possible answers arr
                    currentData.correct_answer,
                ]
                    // sorts the arr to change its el order, so the correct answer wont be always at the same position in the list
                    .sort()
                    // decode the html character entities back into their regular characters
                    .map(he.decode);

                // creates the question object
                const questionObj = {
                    question: he.decode(currentData.question),
                    choices: possibleAnswers,
                    correct_answer: he.decode(currentData.correct_answer),
                };
                // updates the currentQuestion  state
                setCurrentQuestion(questionObj);
            });

        // fetch data every time the correctQuestionIndex state changes
    }, [currentQuestionIndex, categoryId]);

    //   closes the dialog after some time
    useEffect(() => {
        if (open) {
            const closeDialog = setTimeout(() => {
                setOpen(false);
                setIsGameOver(true);
            }, 3000);

            return () => clearTimeout(closeDialog);
        }
    }, [open, setOpen]);

    return (
        <Box sx={boxQuizBackground} className="box">
            <Dialog open={open}>
                <DialogTitle>Game Over</DialogTitle>
            </Dialog>

            <GameHeader
                score={score}
                currentQuestionIndex={currentQuestionIndex}
                timer={timer}
                remainingLives={lives}
            />

            <Question
                nextQuestion={nextQuestion}
                updateScoreState={updateScoreState}
                currentQuestion={currentQuestion}
                decrementLives={decrementLives}
                resetTimer={resetTimer}
            />
        </Box>
    );
}

export default Quiz;
