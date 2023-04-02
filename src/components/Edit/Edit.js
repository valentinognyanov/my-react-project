import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { useForm } from "../../hooks/useForm";
import { movieServiceFactory } from "../../services/movieService";
import { useMovieContext } from "../../contexts/MovieContext";

export const Edit = () => {
    const { onMovieEditSubmit } = useMovieContext();
    const { movieId } = useParams();
    const movieService = useService(movieServiceFactory)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        year: '',
        runtime: '',
        director: '',
        actors: '',
        imageUrl: '',
        plot: '',
        genres: [],
    }, onMovieEditSubmit);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                changeValues(result)
            });
    }, [movieId]);

    return (
        <div className='create-div'>
            <h3>Edit</h3>
            <div className='create-form'>
                <form id='create-form' method='POST' onSubmit={onSubmit}>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Title.." />

                    <input value={values.year} onChange={changeHandler} type="number" id="year" name="year" placeholder="Year.." />

                    <input value={values.runtime} onChange={changeHandler} type="number" id="runtime" name="runtime" placeholder="Runtime.." />

                    <input value={values.director} onChange={changeHandler} type="text" id="director" name="director" placeholder="Director.." />

                    <input value={values.actors} onChange={changeHandler} type="text" id="actors" name="actors" placeholder="Actors.." />

                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="ImageUrl.." />

                    <textarea value={values.plot} onChange={changeHandler} type="text" id="plot" name="plot" placeholder="Plot.." />

                    <div className='ganres-checkbox'>
                        <div>
                            <h5>Genres</h5>
                            <input type="checkbox" id="genres" /><label htmlFor="comedy">Comedy</label>
                            <input type="checkbox" id="genres" /><label htmlFor="fantasy">Fantasy</label>
                            <input type="checkbox" id="genres" /><label htmlFor="crime">Crime</label>
                            <input type="checkbox" id="genres" /><label htmlFor="drama">Drama</label>
                            <input type="checkbox" id="genres" /><label htmlFor="music">Music</label>
                            <input type="checkbox" id="genres" /><label htmlFor="adventure">Adventure</label>
                            <input type="checkbox" id="genres" /><label htmlFor="history">History</label>
                            <input type="checkbox" id="genres" /><label htmlFor="thriller">Thriller</label>
                            <input type="checkbox" id="genres" /><label htmlFor="animation">Animation</label>
                            <input type="checkbox" id="genres" /><label htmlFor="family">Family</label>
                            <input type="checkbox" id="genres" /><label htmlFor="mystery">Mystery</label>
                            <input type="checkbox" id="genres" /><label htmlFor="biography">Biography</label>
                            <input type="checkbox" id="genres" /><label htmlFor="action">Action</label>
                            <input type="checkbox" id="genres" /><label htmlFor="filmNoir">Film-Noir</label>
                            <input type="checkbox" id="genres" /><label htmlFor="romance">Romance</label>
                            <input type="checkbox" id="genres" /><label htmlFor="sciFi">Sci-Fi</label>
                            <input type="checkbox" id="genres" /><label htmlFor="war">War</label>
                            <input type="checkbox" id="genres" /><label htmlFor="western">Western</label>
                            <input type="checkbox" id="genres" /><label htmlFor="horror">Horror</label>
                            <input type="checkbox" id="genres" /><label htmlFor="musical">Musical</label>
                            <input type="checkbox" id="genres" /><label htmlFor="sport">Sport</label>
                        </div>
                    </div>
                    <input type="submit" id='submit' value="Submit" />
                </form>
            </div>
        </div>
    );
};