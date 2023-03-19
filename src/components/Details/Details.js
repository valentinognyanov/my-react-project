import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as movieService from '../../services/movieService';
import './Details.css';

export const Details = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result)
            })
    }, [movieId]);

    return (
        <section className='movie-details'>
            <h3 className='title'>{movie.title} ({movie.year})</h3>
            <div className='movie-info'>
                <div className='movie-header'>
                    <img className='movie-img' src={movie.imageUrl}/>
                    <span className='director'>{movie.director}</span>
                    <p className='genre'>{movie.genres}</p>
                </div>
                <p className='plot'>{movie.plot}</p>
            </div>
        </section>
    );
};