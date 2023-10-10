/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Typography, List, ListItemButton } from "@mui/material";

const Question = ({
  questions,
  updateQuestionState,
  currentQuestion,
  updateScoreState,
}) => {
  // states
  const [answerIndex, setAnswerIndex] = useState(null); //When someone click on the answer, we can track the index
  const [answer, setAnswer] = useState(null); //Set answer to true if its the right one
  const [feedback, setFeedback] = useState(null);
  const [disabledList, setDisabledList] = useState(false);
  // destructures the current question and assigns its properties to variables
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [results, setResults] = useState(null);

  const data = () => {
    useEffect(() => {
      axios
        .get("https://opentdb.com/api.php?amount=40&category=15&type=multiple")
        .then((res) => {
          setResults(res.data.results);
        });
    }, []);
  };

  data();

  // creates an arr containing the incorrect answers + the correct answer
  const createAnswersObj = () => {
    if (results) {
      let resultsArr = [];
      for (const key in results) {
        results[key].incorrect_answers.push(results[key].correct_answer);
        results[key].incorrect_answers.sort();
        resultsArr.push(results[key].incorrect_answers);
      }
      return resultsArr;
    }
  };

  if (results) {
    const answersData = createAnswersObj();
    console.log(answersData);
  }

  //Move to next question
  const nextQuestion = () => {
    // checks if the next question exists before attempting to advance to the next question
    if (questions[currentQuestion + 1] !== undefined) {
      updateQuestionState();
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
      updateScoreState();
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
    <>
      <Typography color="white" variant="h6">
        {/* displays the question */}
        {/* iterave over the quesion object */}
        {results[0].question}
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
    </>
  );
};

export default Question;
