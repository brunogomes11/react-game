/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Typography, Grid, Box, Button } from "@mui/material";

const Question = ({
  nextQuestion,
  currentQuestion,
  updateScoreState,
  decrementLives,
  resetTimer,
  endTimeRef,
}) => {
  const [answer, setAnswer] = useState(null); //set answer to true if its the right one

  const isCorrect = answer === currentQuestion.correct_answer;
  console.log(currentQuestion.correct_answer);
  const isAnswered = answer !== null;

  // callback triggered when player selects an answer
  const onAnswerClick = (choice) => {
    // updates the element style
    setAnswer(choice);

    if (choice === currentQuestion.correct_answer) {
      const currentTime = Date.now();
      const secondsRemaining = Math.max(
        0,
        Math.ceil((endTimeRef.current - currentTime) / 1000)
      );
      updateScoreState(secondsRemaining);
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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid item className="question">
        <Typography color="white" variant="body1" align="center">
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

                "&:hover": {
                  backgroundColor: "secondary.dark",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{ textTransform: "capitalize !important" }}
              >
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
          width: "13rem",
          height: "13rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isAnswered &&
          (isCorrect ? (
            <Box
              component="img"
              sx={{
                backgroundColor: "rgba(0, 128, 0, 0.25)",
                borderRadius: ".2rem",
                height: 100,
                width: 500,
                paddingRight: "10px",
              }}
              src="/correctAnswer.png"
            ></Box>
          ) : (
            <Box
              component="img"
              sx={{
                backgroundColor: "rgba(255, 0, 0, 0.25)",
                borderRadius: ".2rem",
                height: 100,
                width: 500,
                paddingRight: "10px",
              }}
              src="/wrongAnswer.png"
            ></Box>
          ))}
      </Grid>
    </Grid>
  );
};

export default Question;
