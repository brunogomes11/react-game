/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Typography, List, ListItemButton } from "@mui/material";

const Question = ({
  updateQuestionState,
  currentQuestion,
  updateScoreState,
}) => {
  const [answerIndex, setAnswerIndex] = useState(null); //used to style the choices
  const [answer, setAnswer] = useState(null); //set answer to true if its the right one
  const [feedback, setFeedback] = useState(null);
  const [disabledList, setDisabledList] = useState(false);

  //Move to next question
  const nextQuestion = () => {
    updateQuestionState();
    // Set back to default states
    setAnswerIndex(null);
    setAnswer(null);
    setFeedback(null);
    setDisabledList(false);
  };

  // callback triggered when player selects an answer
  const onAnswerClick = (choice, index) => {
    // updates the element style
    setAnswerIndex(index);
    // checks if answer is correct
    if (choice === currentQuestion.correct_answer) {
      // updates states
      setFeedback("You got it right!");
      setAnswer(true);
      updateScoreState();
    } else {
      // update states
      setFeedback("Wrong answer!");
      setAnswer(false);
    }
    // disable player interaction
    setDisabledList(true);
    // moves to the next question after 1sec
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  return (
    //Box container = div with styles using sx
    <>
      <Typography color="white" variant="h6">
        {/* displays the question */}
        {currentQuestion.question}
      </Typography>
      <List>
        {/* list the answer choices */}
        {currentQuestion.choices.map((choice, index) => (
          <ListItemButton
            //   callback to check if answer is correct/wrong
            onClick={() => onAnswerClick(choice, index)}
            key={index}
            disabled={disabledList}
            sx={{
              backgroundColor:
                answerIndex === index ? "secondary.main" : "transparent",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            {choice}
          </ListItemButton>
        ))}
      </List>

      <Typography
        variant="h6"
        sx={{ color: answer === false ? "red" : "green" }}
      >
        {feedback}
      </Typography>
    </>
  );
};

export default Question;
