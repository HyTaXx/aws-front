import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App Component", () => {
    it("renders the main heading with correct text", () => {
        render(<App />);

        const heading = screen.getByRole("heading", {
            name: /vite \+ react \+ armand/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("increments counter when button is clicked", () => {
        render(<App />);

        const button = screen.getByRole("button", { name: /count is 0/i });
        expect(button).toBeInTheDocument();

        // Click the button
        fireEvent.click(button);

        // Check if counter incremented
        const updatedButton = screen.getByRole("button", {
            name: /count is 1/i,
        });
        expect(updatedButton).toBeInTheDocument();
    });
});
