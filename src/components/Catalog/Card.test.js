import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { Card } from './Card';

test('Correct behavior when click on details button.', async () => {
    global.window = { location: { pathname: null } };

    const movieId = 'id';

    act(() => {
        render(
            <BrowserRouter>
                <Card _id={movieId} />
            </BrowserRouter>
        );
    });

    const detailsBtnElement = screen.queryByText('Details');

    await userEvent.click(detailsBtnElement);

    expect(global.window.location.pathname).toContain(`/details/${movieId}`);
});

test('Correct title name display.', async () => {
    const name = 'Name';
    const year = 'year';

    act(() => {
        render(
            <BrowserRouter>
                <Card title={name} year={year} />
            </BrowserRouter>
        );
    });

    const title = await screen.getByTestId('title');

    expect(title).toHaveTextContent(`${name} (${year})`);
});

test('Correct genres display.', async () => {
    const genres = [];

    act(() => {
        render(
            <BrowserRouter>
                <Card genres={genres} />
            </BrowserRouter>
        );
    });

    const genresElement = await screen.getByTestId('genres');

    expect(genresElement).toHaveTextContent(`${genres}`);
});

test('Correct image url.', async () => {
    const imageUrl = '';
    const id = '';

    act(() => {
        render(
            <BrowserRouter>
                <Card imageUrl={imageUrl} _id={id} />
            </BrowserRouter>
        );
    });

    const imageElement = await screen.getByAltText(id);

    expect(imageElement.src).toContain(imageUrl);
});