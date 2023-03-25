import { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useService } from '../../hooks/useService';

import { AuthContext } from '../../contexts/AuthContext';
import { movieServiceFactory } from '../../services/movieService';
import './Details.css';

export const Details = () => {
    const { userId, userEmail } = useContext(AuthContext);
    const [comment, setComment] = useState('');
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const movieService = useService(movieServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                setMovie(result);
            })
    }, [movieId]);

    const isOwner = movie._ownerId === userId;
    const isAuthenticated = !!userId;

    const onDeleteClick = async () => {

        const confirmation = window.confirm('Are you sure you want to delete the movie ?');

        if (confirmation) {
            await movieService.delete(movie._id);

            navigate('/catalog');
        }
    };

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const result = await movieService.addComment(movieId, {
            userEmail,
            userId,
            comment,
        });
        setMovie(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
        setComment('');
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
                    {movie.comments?.map(x => (
                        <li key={x.userEmail} className='comment'>
                            <p>{x._ownerId}: {x.comment}</p>
                        </li>
                    ))}
                    {!movie.comments?.length && (
                        <p className='no-comment'>No comments.</p>
                    )}
                </ul>
            </div>
            {isAuthenticated && (
                <article className='comment-article'>
                    <label>Add new comment</label>
                    <form className='comment-form' onSubmit={onCommentSubmit}>
                        <textarea name='comment' placeholder='Comment....' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        <input className='comment-submit' type='submit' value='Add Comment'></input>
                    </form>
                </article>
            )}
        </section>
    );
};