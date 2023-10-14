/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import he from "he";

import Question from "./Question";
import GameHeader from "./GameHeader";
import { boxQuizBackground } from "./question_styles";
import { Box } from "@mui/material";
import axios from "axios";

function Quiz({ categoryId }) {
    console.log("Quiz Component Rendering...");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //question index
    const [score, setScore] = useState(0);
    // const [results, setResults] = useState(null); DELETE THIS STATE????
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

    // fetchs data to get questions. This need to move into the category component so the user can select the category of the questions
    // MOVE THIS INTO THE QUESTIONS.JSX???
    useEffect(() => {
        axios
            .get(
                `https://opentdb.com/api.php?amount=1&category=${categoryId}&type=multiple`
            )
            .then((res) => {
                // setResults(res.data.results);

                const currentData = res.data.results[0];

                // creates the possible answers arr containing all the incorrect + correct answer
                const possibleAnswers = [
                    // destructures the incorrect answers arr and add its elements to the possible answers arr
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
                // updates the currestQuestion  state
                setCurrentQuestion(questionObj);
            });

        // fetchs data everytime the currectQuestionIndex state changes
    }, [currentQuestionIndex, categoryId]);

    // console.log("results state", results);
    console.log("currentQuestion state", currentQuestion);

    return (
        <Box sx={boxQuizBackground} className="box">
            <GameHeader
                score={score}
                currentQuestionIndex={currentQuestionIndex}
            />
            <Question
                nextQuestion={nextQuestion}
                updateScoreState={updateScoreState}
                currentQuestion={currentQuestion}
            />
        </Box>
    );
}

export default Quiz;
