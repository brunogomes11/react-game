import { useState } from "react";

import Question from "./Question";
import GameHeader from "./GameHeader";
import { boxQuizBackground } from "./question_styles";
import { Box } from "@mui/material";
import { jsQuiz } from "./constant";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0); //question index
  const [score, setScore] = useState(0);

  const updateQuestionState = () => {
    // updates the state
    setCurrentQuestion(currentQuestion + 1);
  };

  const updateScoreState = () => {
    setScore(score + 10);
  };
  return (
    <Box sx={boxQuizBackground} className="box">
      <GameHeader score={score} currentQuestion={currentQuestion} />
      <Question
        questions={jsQuiz.questions}
        updateQuestionState={updateQuestionState}
        currentQuestion={currentQuestion}
        updateScoreState={updateScoreState}
      />
    </Box>
  );
}

export default Quiz;
