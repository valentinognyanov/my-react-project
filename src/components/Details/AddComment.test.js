import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import { AddComment } from "./AddComment";

test('Correct form render', async () => {
    render(
        <BrowserRouter>
            <AddComment />
        </BrowserRouter>
    );

    const addCommentElement = await screen.getByPlaceholderText(/comment\.\.\.\./i);

    expect(addCommentElement).toBeInTheDocument();
});

test('Correct button render', async () => {
    render(
        <BrowserRouter>
            <AddComment />
        </BrowserRouter>
    );

    const commentBtnElement = await screen.getByRole('button', { name: /add comment/i });

    expect(commentBtnElement).toBeInTheDocument();
});