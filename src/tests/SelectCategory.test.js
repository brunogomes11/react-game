/* eslint-disable no-undef */

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import SelectCategory from "../SelectCategory";

afterEach(cleanup);

test("should render SelectCategory component", () => {
    render(<SelectCategory onCategorySelected={() => {}} />);

    const gridElement = screen.getByTestId("categories-Grid");
    expect(gridElement).toBeInTheDocument();
});

test("should render all categories", () => {
    render(<SelectCategory onCategorySelected={() => {}} />);
    const categories = [
        "Video Game",
        "Film",
        "Books",
        "Computer Science",
        "Math",
        "Geography",
        "Arts",
        "General Knowledge",
        "Science & Nature",
    ];

    categories.forEach((category) => {
        expect(screen.getByText(category)).toBeInTheDocument();
    });
});

test("should call onCategorySelected with correct category ID when category is clicked", () => {
    const mockOnCategorySelected = jest.fn();

    render(<SelectCategory onCategorySelected={mockOnCategorySelected} />);

    const videoGameCategory = screen.getByText("Video Game");
    fireEvent.click(videoGameCategory);

    expect(mockOnCategorySelected).toHaveBeenCalledWith(15);
});
