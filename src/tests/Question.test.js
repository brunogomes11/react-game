/* eslint-disable no-undef */

import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Question from "../Question";

afterEach(cleanup);

const mockQuestion = {
    question: "What's 2 + 2?",
    choices: ["1", "3", "4", "5"],
    correct_answer: "4",
};

test("should render Question component", () => {
    render(
        <Question
            nextQuestion={() => {}}
            currentQuestion={mockQuestion}
            updateScoreState={() => {}}
            decrementLives={() => {}}
            resetTimer={() => {}}
        />
    );
    const questionElement = screen.getByText("What's 2 + 2?");
    expect(questionElement).toBeInTheDocument();
});

test("should display all answer choices", () => {
    render(
        <Question
            nextQuestion={() => {}}
            currentQuestion={mockQuestion}
            updateScoreState={() => {}}
            decrementLives={() => {}}
            resetTimer={() => {}}
        />
    );
    mockQuestion.choices.forEach((choice) => {
        const choiceElement = screen.getByText(choice);
        expect(choiceElement).toBeInTheDocument();
    });
});

test("should handle correct answer", () => {
    const mockUpdateScoreState = jest.fn();
    render(
        <Question
            nextQuestion={() => {}}
            currentQuestion={mockQuestion}
            updateScoreState={mockUpdateScoreState}
            decrementLives={() => {}}
            resetTimer={() => {}}
        />
    );
    const correctAnswerBtn = screen.getByText(mockQuestion.correct_answer);
    fireEvent.click(correctAnswerBtn);
    expect(mockUpdateScoreState).toBeCalledTimes(1);
});

test("should handle wrong answer", () => {
    const mockDecrementLives = jest.fn();
    render(
        <Question
            nextQuestion={() => {}}
            currentQuestion={mockQuestion}
            updateScoreState={() => {}}
            decrementLives={mockDecrementLives}
            resetTimer={() => {}}
        />
    );
    const wrongAnswerBtn = screen.getByText("5");
    fireEvent.click(wrongAnswerBtn);
    expect(mockDecrementLives).toBeCalledTimes(1);
});
