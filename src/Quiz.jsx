import { useState, useEffect } from "react";
import he from "he";

import Question from "./Question";
import GameHeader from "./GameHeader";
import { boxQuizBackground } from "./question_styles";
import { Box } from "@mui/material";
import axios from "axios";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //question index
  const [score, setScore] = useState(0);
  // const [results, setResults] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    choices: [],
    correct_answer: "",
  });

  // updates the state of the currentQuestionIndex. It is triggered by the nextQuestion call back in the question.jsx, after the player selects an answer. prevCount represents the previous state of the currentQuestionIndex
  const updateQuestionState = () => {
    setCurrentQuestionIndex((prevCount) => prevCount + 1);
  };

  // updates the score state. It is triggered by the onAnswerClick call back in the question.jsx when the player gets the answer correct
  const updateScoreState = () => {
    setScore(score + 10);
  };

  // fetchs data to get questions. This need to move into the category component so the user can select the category of the questions
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=1&category=15&type=multiple")
      .then((res) => {
        // setResults(res.data.results);

        // creates the possible answers arr containing all the incorrect + correct answer
        const possibleAnswers = [
          // destructures the incorrect answers arr and add its elementos to the possible answers arr
          ...res.data.results[0].incorrect_answers,
          // adds the correct answer to the possible answers arr
          res.data.results[0].correct_answer,
        ]
          // sorts the arr to change its el order, so the correct answer wont be always at the same position in the list
          .sort()
          // decode the html character entities back into their regular characters
          .map(he.decode);

        // creates the question object
        const questionObj = {
          question: he.decode(res.data.results[0].question),
          choices: possibleAnswers,
          correct_answer: he.decode(res.data.results[0].correct_answer),
        };
        // updates the currestQuestion  state
        setCurrentQuestion(questionObj);
      });
    // fetchs data everytime the currectQuestionIndex state changes
  }, [currentQuestionIndex]);

  // console.log("results state", results);
  console.log("currentQuestion state", currentQuestion);

  return (
    <Box sx={boxQuizBackground} className="box">
      <GameHeader score={score} currentQuestionIndex={currentQuestionIndex} />
      <Question
        updateQuestionState={updateQuestionState}
        currentQuestionIndex={currentQuestionIndex}
        updateScoreState={updateScoreState}
        currentQuestion={currentQuestion}
      />
    </Box>
  );
}

export default Quiz;
