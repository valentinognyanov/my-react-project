import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useService } from "../../hooks/useService"; 
import { useForm } from "../../hooks/useForm";
import { movieServiceFactory } from "../../services/movieService";

export const Edit = ({
    onMovieEditSubmit,
}) => {
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
                    <input value={values.title} onChange={changeHandler}  type="text" id="title" name="title" placeholder="Title.." />

                    <input value={values.year} onChange={changeHandler} type="number" id="year" name="year" placeholder="Year.." />

                    <input value={values.runtime} onChange={changeHandler} type="number" id="runtime" name="runtime" placeholder="Runtime.." />

                    <input value={values.director} onChange={changeHandler} type="text" id="director" name="director" placeholder="Director.." />

                    <input value={values.actors} onChange={changeHandler} type="text" id="actors" name="actors" placeholder="Actors.." />

                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="ImageUrl.." />

                    <textarea value={values.plot} onChange={changeHandler}  type="text" id="plot" name="plot" placeholder="Plot.." />

                    <div className='ganres-checkbox'>
                        <div>
                            <h5>Genres</h5>
                            <input type="checkbox" id="comedy" /><label htmlFor="comedy">Comedy</label>
                            <input type="checkbox" id="fantasy" /><label htmlFor="fantasy">Fantasy</label>
                            <input type="checkbox" id="crime" /><label htmlFor="crime">Crime</label>
                            <input type="checkbox" id="drama" /><label htmlFor="drama">Drama</label>
                            <input type="checkbox" id="music" /><label htmlFor="music">Music</label>
                            <input type="checkbox" id="adventure" /><label htmlFor="adventure">Adventure</label>
                            <input type="checkbox" id="history" /><label htmlFor="history">History</label>
                            <input type="checkbox" id="thriller" /><label htmlFor="thriller">Thriller</label>
                            <input type="checkbox" id="animation" /><label htmlFor="animation">Animation</label>
                            <input type="checkbox" id="family" /><label htmlFor="family">Family</label>
                            <input type="checkbox" id="mystery" /><label htmlFor="mystery">Mystery</label>
                            <input type="checkbox" id="biography" /><label htmlFor="biography">Biography</label>
                            <input type="checkbox" id="action" /><label htmlFor="action">Action</label>
                            <input type="checkbox" id="filmNoir" /><label htmlFor="filmNoir">Film-Noir</label>
                            <input type="checkbox" id="romance" /><label htmlFor="romance">Romance</label>
                            <input type="checkbox" id="sciFi" /><label htmlFor="sciFi">Sci-Fi</label>
                            <input type="checkbox" id="war" /><label htmlFor="war">War</label>
                            <input type="checkbox" id="western" /><label htmlFor="western">Western</label>
                            <input type="checkbox" id="horror" /><label htmlFor="horror">Horror</label>
                            <input type="checkbox" id="musical" /><label htmlFor="musical">Musical</label>
                            <input type="checkbox" id="sport" /><label htmlFor="sport">Sport</label>
                        </div>
                    </div>
                    <input type="submit" id='submit' value="Submit" />
                </form>
            </div>
        </div>
    );
};