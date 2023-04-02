import { render, screen } from "@testing-library/react";

import { Home } from './Home';

test('Correct page title', async () => {
    const title = 'Welcome to My Movie Library';

    render(<Home />);

    const titleElement = await screen.getByTestId('welcome');

    expect(titleElement).toHaveTextContent(title);
});

test('Correct "last fave movies" title', async () => {
    const title = 'Last five uploaded movies';

    render(<Home />);

    const titleElement = await screen.getByTestId('last-five');

    expect(titleElement).toHaveTextContent(title);
});

test('Correct image url', async () => {
    const imageUrl = '/images/home-page-img.png';

    render(<Home />);

    const imageElement = await screen.getByTestId('welcome-img');

    expect(imageElement.src).toContain(imageUrl);
});