/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Scoreboard from "../Scoreboard";

jest.mock("axios");

describe("<Scoreboard />", () => {
    const mockData = [
        { name: "John", score: 100 },
        { name: "Doe", score: 90 },
        { name: "Jane", score: 80 },
    ];

    test("fetches and displays scores", async () => {
        axios.get.mockResolvedValue({ data: mockData });

        render(
            <Scoreboard
                score={0}
                isGameOver={false}
                isLoading={false}
                setIsLoading={jest.fn()}
            />
        );

        await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("Doe")).toBeInTheDocument();
        expect(screen.getByText("Jane")).toBeInTheDocument();
    });
});
