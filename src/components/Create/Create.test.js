import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


import { MovieProvider } from "../../contexts/MovieContext";
import { Create } from "./Create";

test('Renders form properly.', async () => {
    render(
        <BrowserRouter>
            <MovieProvider>
                <Create />
            </MovieProvider>
        </BrowserRouter>
    );

    const title = await screen.getByTestId('title');
    const year = await screen.getByTestId('year');
    const runtime = await screen.getByTestId('runtime');
    const director = await screen.getByTestId('director');
    const actors = await screen.getByTestId('actors');
    const imageUrl = await screen.getByTestId('imageUrl');
    const plot = await screen.getByTestId('plot');

    expect(title).toHaveAttribute('type', 'text');
    expect(title).toBeInTheDocument();

    expect(year).toHaveAttribute('type', 'number');
    expect(year).toBeInTheDocument();

    expect(runtime).toHaveAttribute('type', 'number');
    expect(runtime).toBeInTheDocument();

    expect(director).toHaveAttribute('type', 'text');
    expect(director).toBeInTheDocument();

    expect(actors).toHaveAttribute('type', 'text');
    expect(actors).toBeInTheDocument();

    expect(imageUrl).toHaveAttribute('type', 'text');
    expect(imageUrl).toBeInTheDocument();

    expect(plot).toHaveAttribute('type', 'text');
    expect(plot).toBeInTheDocument();
});

test('Correct page title.', async () => {
    render(
        <BrowserRouter>
            <MovieProvider>
                <Create />
            </MovieProvider>
        </BrowserRouter>
    );

    const pageTitleElemet = await screen.getByTestId('create-page-title');

    expect(pageTitleElemet).toHaveTextContent('Add a movie');
});