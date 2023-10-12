import { useState, useEffect } from "react";
import he from "he";

import Question from "./Question";
import GameHeader from "./GameHeader";
import { boxQuizBackground } from "./question_styles";
import { Box } from "@mui/material";
import { jsQuiz } from "./constant";
import axios from "axios";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //question index
  const [score, setScore] = useState(0);
  const [results, setResults] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    choices: [],
    correct_answer: "",
  });

  const updateQuestionState = () => {
    // updates the state
    setCurrentQuestionIndex((prevCount) => prevCount + 1);
  };

  const updateScoreState = () => {
    setScore(score + 10);
  };

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=1&category=15&type=multiple")
      .then((res) => {
        setResults(res.data.results);

        // const possibleAnswers = res.data.results.map((answers) => {
        //   return [...answers.incorrect_answers, answers.correct_answer].sort();
        // });

        const possibleAnswers = [
          ...res.data.results[0].incorrect_answers,
          res.data.results[0].correct_answer,
        ]
          .sort()
          .map(he.decode);

        const questionObj = {
          question: he.decode(res.data.results[0].question),
          choices: possibleAnswers,
          correct_answer: he.decode(res.data.results[0].correct_answer),
        };
        setCurrentQuestion(questionObj);
      });
  }, [currentQuestionIndex]);
  // console.log("results state", results);
  console.log("currentQuestion state", currentQuestion);
  // creates an arr containing the incorrect answers + the correct answer
  // const createAnswersObj = () => {
  //   if (results) {
  //     return results.map((result) => {
  //       return [...result.incorrect_answers, result.correct_answer].sort();
  //     });
  //   }
  // };

  // if (results) {
  // const answersData = createAnswersObj();
  // console.log(answersData);
  // return answersData;
  // }

  return (
    <Box sx={boxQuizBackground} className="box">
      <GameHeader score={score} currentQuestionIndex={currentQuestionIndex} />
      <Question
        questions={jsQuiz.questions}
        updateQuestionState={updateQuestionState}
        currentQuestionIndex={currentQuestionIndex}
        updateScoreState={updateScoreState}
        // answersData={answersData}
        currentQuestion={currentQuestion}
      />
    </Box>
  );
}

export default Quiz;
