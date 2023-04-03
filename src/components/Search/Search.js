import { useState } from 'react';

import { useMovieContext } from '../../contexts/MovieContext';

import { movieServiceFactory } from '../../services/movieService';
import { SearchResultCard } from './SearchResultCard';

import './Search.css';
import { Paginate } from '../Pagination/Paginate';

export const Search = () => {
    const movieService = movieServiceFactory();
    const [input, setInput] = useState('');
    const [foundMovies, setFoundMovies] = useState([]);
    const { movies } = useMovieContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(12);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = foundMovies.slice(indexOfFirstMovie, indexOfLastMovie);

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

    const onChangeSearchHandler = (e) => {

        setInput(e.target.value);
    };

    const onSearchSubmit = async (e) => {
        e.preventDefault();

        const searchResult = await movieService.search(input);
        setFoundMovies(searchResult);
    };

    return (
        <div className="wrap">
            <form method='GET' className="search" onSubmit={onSearchSubmit}>
                <input onChange={onChangeSearchHandler} type="text" className="searchTerm" placeholder="Search..." />
                <button type="submit" className="searchButton"></button>
            </form>
            <div className="search-result">
                {currentMovie?.map(movie => <SearchResultCard key={movie._id} {...movie} />)}
                {currentMovie.length === 0 && <p>No movies found</p>}
            </div>
            {currentMovie.length !== 0 ? <Paginate
                previousPage={previousPage}
                nextPage={nextPage}
            /> : ''}
        </div>
    );
};