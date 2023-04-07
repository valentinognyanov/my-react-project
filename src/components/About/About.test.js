import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { About } from "./About";

test('Correct image url.', async () => {
    render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    );

    const imageElement = await screen.getByTestId('about-img');

    expect(imageElement.src).toContain('/images/about-page-image.png');
});

test('Correct behavior when click on "ENJOY !" button.', async () => {
    global.window = { location: { pathname: null } };

    render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    );

    await userEvent.click(screen.queryByText('ENJOY !'));

    expect(global.window.location.pathname).toContain(`/catalog`);
});

test('Correct info display.', async () => {
    const info = "This app is made for project defence of SoftUni's JS Web module - ReactJS course";

    render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    );

    const title = await screen.getByTestId('about-h2');

    expect(title).toHaveTextContent(info);
});

test('Correct info display.', async () => {
    const info = "Here you can upload and browse through variety of movies.";

    render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    );

    const title = await screen.getByTestId('about-h4');

    expect(title).toHaveTextContent(info);
});