import { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { useService } from '../../hooks/useService';

import { movieServiceFactory } from '../../services/movieService';
import './Details.css';

export const Details = () => {
    const { userId } = useContext(AuthContext);
    // const [comment, setComment] = useState('');
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const movieService = useService(movieServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result)
            })
    }, [movieId]);

    const isOwner = movie._ownerId === userId;

    const onDeleteClick = async () => {
        await movieService.delete(movie._id);

        navigate('/catalog');
    }

    return (
        <section className='movie-details'>
            <h3 className='title'>{movie.title} ({movie.year})</h3>
            <div className='movie-info'>
                <div className='movie-header'>
                    <img className='movie-img' src={movie.imageUrl} alt={movie.title} />
                    <span className='director'>{movie.director}</span>
                    <p className='genre'>{movie.genres}</p>
                </div>
                <p className='plot'>{movie.plot}</p>
            </div>
            <div className='details-comments'>

            </div>
            {isOwner && (
                <div className='details-btns'>
                    <Link to={`/edit/${movie._id}`}>Edit</Link>
                    <button className='delete-btn' onClick={onDeleteClick}>Delete</button>
                </div>
            )}
        </section>
    );
};