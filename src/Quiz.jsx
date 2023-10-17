/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import he from "he";
import Question from "./Question";
import GameHeader from "./GameHeader";
import { boxQuizBackground } from "./question_styles";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function Quiz({ categoryId, timer, open, setOpen, score, setScore }) {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //question index
  // const [score, setScore] = useState(0);
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
    // setScore(score + 10);
    let newScore = score + 10;
    setScore(newScore);
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

  //   closes the dialog after some time
  useEffect(() => {
    if (open) {
      const closeDialog = setTimeout(() => {
        setOpen(false);
        navigate("/scoreboard");
        // update a state and at the bottom...
      }, 3000);

      return () => clearTimeout(closeDialog);
    }
  }, [open, setOpen, navigate]);

  return (
    <Box sx={boxQuizBackground} className="box">
      <Dialog open={open}>
        <DialogTitle>Time`s up!</DialogTitle>
      </Dialog>

      <GameHeader
        score={score}
        currentQuestionIndex={currentQuestionIndex}
        timer={timer}
      />
      {/* ...either render the scoreboard or render a new question */}
      <Question
        nextQuestion={nextQuestion}
        updateScoreState={updateScoreState}
        currentQuestion={currentQuestion}
      />
    </Box>
  );
}

export default Quiz;
