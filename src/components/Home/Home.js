import { useState, useEffect } from 'react';

import { LastThreeMovies } from './LastThreeMovies';

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
                <h1>Welcome to My Movie Library :)</h1>
            </div>

            <div id="home-page">
                <h2>Last three uploaded movies</h2>
                {latestMovies.slice(-3).map(movie => <LastThreeMovies {...movie} />)}
                {latestMovies.length === 0 && (<p className='no-movies-home'>No movies yet...</p>)}
            </div>
        </section>
    );
};