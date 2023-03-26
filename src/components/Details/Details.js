import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import * as commentService from '../../services/commentService';
import { useAuthContext } from '../../contexts/AuthContext';
import { movieServiceFactory } from '../../services/movieService';

import { AddComment } from './AddComment';

import './Details.css';

export const Details = () => {
    const { movieId } = useParams();
    const { userId, userEmail, isAuthenticated } = useAuthContext();
    const [movie, setMovie] = useState({});
    const movieService = useService(movieServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            movieService.getOne(movieId),
            commentService.getAllComments(movieId)
        ]).then(([movieData, comments]) => {
            setMovie({
                ...movieData,
                comments
            });
        });
    }, [movieId]);

    const isOwner = movie._ownerId === userId;
    // const isAuthenticated = !!userId;

    const onDeleteClick = async () => {

        let confirmation = window.confirm('Are you sure you want to delete the movie ?');

        if (confirmation) {
            await movieService.delete(movie._id);

            navigate('/catalog');
        }
    };

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(movieId, values.comment);

        setMovie(state => ({
            ...state,
            comments: [...state.comments, response]
        }));
    };

    return (
        <section className='movie-details'>
            <h3 className='title'>{movie.title} ({movie.year})</h3>
            <div className='middle-con'>
                <img className='movie-img' src={movie.imageUrl} alt={movie.title} />
                <div className='movie-info'>
                    <div className='movie-header'>
                        <span className='director'>•Director: {movie.director}</span><br></br>
                        <span className='actors'>•Actors: {movie.actors}</span><br></br>
                        <span className='runtime'>•Runtime: {movie.runtime}</span>
                        <p className='genre'>•Genre: {movie.genres}</p>
                        <p className='plot'>•Plot: {movie.plot}</p>
                    </div>
                    {isOwner && (
                        <div className='details-btns'>
                            <button><Link to={`/edit/${movie._id}`}>Edit</Link></button>
                            <button className='delete-btn' onClick={onDeleteClick}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
            <div className='details-comments'>
                <h2>Comments:</h2>
                <ul>
                    {movie.comments && movie.comments?.map(x => (
                        <li key={x._ownerId} className='comment'>
                            <p>{x.userEmail}: {x.comment}</p>
                        </li>
                    ))}
                    {!movie.comments?.length && (
                        <p className='no-comment'>No comments.</p>
                    )}
                </ul>
            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );
};