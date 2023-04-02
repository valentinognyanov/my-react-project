import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { LastFiveMovies } from "./LastFiveMovies";

test('Correct behavior when click on details button', async () => {
    global.window = { location: { pathname: null } };

    const movieId = 'id';

    render(
        <BrowserRouter>
            <LastFiveMovies _id={movieId} />
        </BrowserRouter>
    );

    await userEvent.click(screen.queryByText('Details'));

    expect(global.window.location.pathname).toContain(`/details/${movieId}`);
});

test('Correct title name display', async () => {
    const name = 'Name';
    const year = 'year';

    render(
        <BrowserRouter>
            <LastFiveMovies title={name} year={year} />
        </BrowserRouter>
    );

    const title = await screen.getByTestId('title');

    expect(title).toHaveTextContent(`${name} (${year})`);
});

test('Correct image url', async () => {
    const imageUrl = '';
    const id = '';

    render(
        <BrowserRouter>
            <LastFiveMovies imageUrl={imageUrl} _id={id} />
        </BrowserRouter>
    );

    const imageElement = await screen.getByAltText(id);

    expect(imageElement.src).toContain(imageUrl);
});