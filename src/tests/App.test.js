/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    // 1. Default Rendering -  When the app loads and no game has started.
    it("renders select category by default", () => {
        render(<App />);
        expect(screen.getByText(/Video Game/i)).toBeInTheDocument();
    });

    // 2. Category Selection
    // You might need to mock the behavior or response if there are API calls when a category is selected
    it("renders quiz when a category is selected", () => {
        render(<App />);
        // Simulating category selection - This will depend on your component structure
        const categoryButton = screen.getByText(/Video Game/i);
        fireEvent.click(categoryButton);

        expect(screen.getByText(/Question/i)).toBeInTheDocument();
    });

    // 3. Quiz Start
    // Similarly, mock the behavior or responses if needed
    it("starts the quiz and displays questions", () => {
        render(<App />);

        expect(screen.getByText(/Question/i)).toBeInTheDocument();
    });

    // 4. Game Over
    it("displays score when game is over", () => {
        render(<App />);
        // Assuming you have a mechanism to finish the game like an end button or something

        expect(screen.getByText(/scoreboard/i)).toBeInTheDocument();
    });
});
