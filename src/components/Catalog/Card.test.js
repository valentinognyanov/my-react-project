import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { Card } from './Card';

test('Correct behavior when click on details button', async () => {
    global.window = { location: { pathname: null } };

    const movieId = 'id';

    render(
        <BrowserRouter>
            <Card _id={movieId} />
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
            <Card title={name} year={year} />
        </BrowserRouter>
    );

    const title = await screen.getByTestId('title');

    expect(title).toHaveTextContent(`${name} (${year})`);
});

test('Correct genres display', async () => {
    const genres = [];

    render(
        <BrowserRouter>
            <Card genres={genres} />
        </BrowserRouter>
    );

    const genresElement = await screen.getByTestId('genres');

    expect(genresElement).toHaveTextContent(`${genres}`);
});

test('Correct image url', async () => {
    const imageUrl = '';
    const id = '';

    render(
        <BrowserRouter>
            <Card imageUrl={imageUrl} _id={id} />
        </BrowserRouter>
    );

    const imageElement = await screen.getByAltText(id);

    expect(imageElement.src).toContain(imageUrl);
});