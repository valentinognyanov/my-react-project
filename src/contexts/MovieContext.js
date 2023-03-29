import { useEffect, useState, createContext, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { movieServiceFactory } from '../services/movieService';

export const MovieContext = createContext();

export const MovieProvider = ({
    children,
}) => {
    const [movies, setMovies] = useState([]);
    const movieService = movieServiceFactory();
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getAll()
            .then(res => {
                setMovies(res)
            })
    }, []);

    const onCreateMovieSubmit = async (data) => {
        const newMovie = await movieService.create(data);

        setMovies(movies => [...movies, newMovie]);

        navigate('/catalog');
    };

    const onMovieEditSubmit = async (values) => {
        const result = await movieService.edit(values._id, values);

        setMovies(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/details/${values._id}`);
    };

    const getMovie = (movieId) => {
        return movies.find(movie => movie._id === movieId);
    };

    const deleteMovie = (movieId) => {
        setMovies(state => state.filter(movie => movie._id !== movieId));
    }

    const context = {
        movies,
        onCreateMovieSubmit,
        onMovieEditSubmit,
        getMovie,
        deleteMovie,
    };

    return (
        <MovieContext.Provider value={context}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    return context;
};