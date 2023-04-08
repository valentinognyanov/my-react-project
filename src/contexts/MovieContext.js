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
        const {
            title,
            year,
            runtime,
            director,
            actors,
            imageUrl,
            plot
        } = data;

        if (!title) {
            return alert('Title should be filled.');
        } else if (title.length <= 2) {
            return alert('Tittle should be at least 3 charachters.');
        }
        if (!year) {
            return alert('Year should be filled.');
        }
        if (!runtime) {
            return alert('Runtime should be filled.');
        }
        if (!director) {
            return alert('Director should be filled.');
        } else if (director.length < 5) {
            return alert('Director should be at least 5 characters.');
        }
        if (!actors) {
            return alert('Actors should be filled.');
        } else if (actors.length < 5) {
            return alert('Actors should be at least 5 characters.');
        }
        if (!imageUrl) {
            return alert('Image URL should be filled.');
        }
        if (!plot) {
            return new Error('Plot should be filled.');
        } else if (plot.length < 10) {
            return alert('Plot should be at least 10 charachters.');
        }

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