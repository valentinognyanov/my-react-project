import { useEffect, useReducer } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { useMovieContext } from '../../contexts/MovieContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { movieServiceFactory } from '../../services/movieService';
import { commentServiceFactory } from '../../services/commentService';
import { movieReducer } from '../../reducers/movieReducer';

import { AddComment } from './AddComment';

import './Details.css';

export const Details = () => {
    const { movieId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const { deleteMovie } = useMovieContext();
    const [movie, dispatch] = useReducer(movieReducer, {});
    const movieService = useService(movieServiceFactory);
    const commentService = useService(commentServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            movieService.getOne(movieId),
            commentService.getAllComments(movieId)
        ]).then(([movieData, comments]) => {
            const movieState = {
                ...movieData,
                comments,
            };
            dispatch({ type: 'MOVIE_FETCH', payload: movieState })
        });
    }, [movieId]);

    const isOwner = movie._ownerId === userId;

    const onDeleteClick = async () => {

        let confirmation = window.confirm(`Are you sure you want to delete ${movie.title} (${movie.year})?`);

        if (confirmation) {
            await movieService.delete(movie._id);

            deleteMovie(movie._id);

            navigate('/catalog');
        }
    };

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(movieId, values.comment);

        dispatch({ type: 'COMMENT_ADD', payload: { ...response, email: userEmail } });
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
                        <p className='genre'>•Genre: {movie.genres?.join(', ')}</p>
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
                        <li key={x._id} className='comment'>
                            <p>{x.author.email}: {x.comment}</p>
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