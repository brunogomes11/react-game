/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import Quiz from "../Quiz";
import axios from "axios";

// Mocking required modules
jest.mock("axios");

describe("<Quiz />", () => {
    const mockData = {
        results: [
            {
                question: "Test Question?",
                incorrect_answers: ["Wrong1", "Wrong2", "Wrong3"],
                correct_answer: "Correct",
            },
        ],
    };

    test("fetches and displays a question", async () => {
        axios.get.mockResolvedValue({ data: mockData });

        render(
            <Quiz
                categoryId="10"
                score={0}
                setScore={jest.fn()}
                setIsGameOver={jest.fn()}
                setIsLoading={jest.fn()}
            />
        );

        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
        expect(screen.getByText("Test Question?")).toBeInTheDocument();
    });
});
