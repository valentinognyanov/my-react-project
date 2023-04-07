import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useMovieContext } from '../../contexts/MovieContext';
import { Paginate } from '../Pagination/Paginate';

import { OwnedMoviesCard } from './OwnedMoviesCard';

import './Profile.css';

export const Profile = () => {
    const { movies } = useMovieContext();
    const { userId } = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(12);
    const ownMovies = movies.filter(x => x._ownerId === userId);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = ownMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const previousPage = () => {

        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {

        if (currentPage !== Math.ceil(movies.length / moviesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="profile-container">
            <h1 className="welcome-email">My Profile</h1>
            <div className="my-movies">
                {currentMovie.length !== 0
                    ? currentMovie.map(movie => <OwnedMoviesCard key={movie._id} {...movie} />)
                    : <h2>You don't have uploaded movies yet...</h2>}
                {currentMovie.length !== 0 ? <Paginate previousPage={previousPage} nextPage={nextPage} /> : ''}
            </div>
        </div>
    );
};