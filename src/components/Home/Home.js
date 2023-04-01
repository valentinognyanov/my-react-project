import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export const Home = () => {
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/movies`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setLatestMovies(result);
            })
    }, []);

    return (
        <section id="welcome-section">
            <div id="welcome-message">
                <h2>Welcome to My Movie Library :)</h2>
            </div>

            <div id="home-page">
                <h1>Last three uploaded movies</h1>
                {latestMovies.slice(-3).map(movie => (
                    <div className="wrapper">
                        <div className="card"><img src={movie.imageUrl} alt={movie._id} />
                            <div className="info">
                                <h1 data-testid="title">{`${movie.title} (${movie.year})`}</h1>
                                <Link to={`/details/${movie._id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
                {latestMovies.length === 0 && (<p className='no-movies-home'>No movies yet...</p>)}
            </div>
        </section>
    );
};