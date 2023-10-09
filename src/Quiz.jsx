/* eslint-disable react/prop-types */
import { useState } from "react";
import { boxQuizBackground } from "./quiz_styles";
import { Box, Typography, List, ListItemButton } from "@mui/material";

const Quiz = ({ questions }) => {
  // states
  const [currentQuestion, setCurrentQuestion] = useState(0); //question index
  const [answerIndex, setAnswerIndex] = useState(null); //When someone click on the answer, we can track the index
  const [answer, setAnswer] = useState(null); //Set answer to true if its the right one
  const [feedback, setFeedback] = useState(null);
  const [disabledList, setDisabledList] = useState(false);
  // destructures the current question and assigns its properties to variables
  const { question, choices, correctAnswer } = questions[currentQuestion];

  //Move to next question
  const nextQuestion = () => {
    // checks if the next question exists before attempting to advance to the next question
    if (questions[currentQuestion + 1] !== undefined) {
      // updates the state
      setCurrentQuestion(currentQuestion + 1);
      //Set to default state
      setAnswerIndex(null);
      setAnswer(null);
      setFeedback(null);
      setDisabledList(false);
    } else {
      // if the questions is over, render the score board
      console.log("render the score board");
    }
  };
  // if the answer is correct
  const onAnswerClick = (choice, index) => {
    // updates the state
    setAnswerIndex(index);
    // checks if answer is correct
    if (choice === correctAnswer) {
      // updates state
      setFeedback("You got it right!");
      setAnswer(true);
    } else {
      // update states
      setFeedback("Wrong answer!");
      setAnswer(false);
    }
    // disable answer clicks
    setDisabledList(true);
    //When user select the answer, go to the next question
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  return (
    //Box container = div with styles using sx
    <Box sx={boxQuizBackground}>
      <Typography component="span" color="white" className="active-question-no">
        {/* Display the current question number */}
        {currentQuestion + 1}
      </Typography>
      <Typography component="span" color="white" className="total-question">
        {/* Display the total questions number */}/{questions.length}
      </Typography>

      <Typography color="white" variant="h6">
        {/* displays the question */}
        {question}
      </Typography>

      <List>
        {/* list the choices */}
        {choices.map((choice, index) => (
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
    </Box>
  );
};

export default Quiz;
