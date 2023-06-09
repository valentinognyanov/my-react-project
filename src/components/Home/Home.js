import { useState, useEffect } from 'react';

import { LastFiveMovies } from './LastFiveMovies';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export const Home = () => {
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/movies`)
            .then(res => res.json())
            .then(result => {
                setLatestMovies(result);
            })
    }, []);

    return (
        <section id="welcome-section">
            <div id="welcome-message">
                <h1 data-testid="welcome">Welcome to My Movie Library</h1>
            </div>
            <div id="welcome-image">
                <img data-testid="welcome-img" src="/images/home-page-img.png" alt='home-img' />
            </div>

            <div id="home-page">
                <h2 data-testid="last-five">Last five uploaded movies</h2>
                {latestMovies?.slice(-5).map(movie => <LastFiveMovies key={movie._id} {...movie} />)}
            </div>
            {latestMovies.length === 0 && (<p className='no-movies-home'>No movies yet...</p>)}
        </section>
    );
};