import { useState } from 'react';

import { movieServiceFactory } from '../../services/movieService';
import { SearchResultCard } from './SearchResultCard';

import './Search.css';

export const Search = () => {
    const movieService = movieServiceFactory();

    const [input, setInput] = useState('');
    const [movies, setMovies] = useState([]);

    const onChangeSearchHandler = (e) => {

        setInput(e.target.value);
    };
    const onSearchSubmit = async (e) => {
        e.preventDefault();

        const searchResult = await movieService.search(input);
        setMovies(searchResult);
    };

    return (
        <div className="wrap">
            <form method='GET' className="search" onSubmit={onSearchSubmit}>
                <input onChange={onChangeSearchHandler} type="text" className="searchTerm" placeholder="Search..." />
                <button type="submit" className="searchButton"></button>
            </form>
            <div className="search-result">
                {movies?.map(movie => <SearchResultCard key={movie._id} {...movie} />)}
                {movies.length === 0 && ''}
            </div>
        </div>
    );
};