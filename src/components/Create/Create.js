import { useState } from 'react';
import { useMovieContext } from '../../contexts/MovieContext';
import { useForm } from '../../hooks/useForm';

import './Create.css';

export const Create = () => {
    const { onCreateMovieSubmit } = useMovieContext();
    const [genres, setGenres] = useState([]);
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        year: '',
        runtime: '',
        director: '',
        actors: '',
        imageUrl: '',
        plot: '',
        genres: [],

    }, onCreateMovieSubmit);

    const onChangeGenreHandler = (e) => {
        e.preventDefault();

        const { value, checked } = e.target;

        if (checked) {
            setGenres(state => [...state, value]);
        } else {
            setGenres(state => {
                return [...state.filter(x => x !== value)];
            });
        }
        values.genres = genres;
    };

    return (
        <div className='create-div'>
            <h3>Add a movie</h3>
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
                            <input type="checkbox" id="comedy" value="comedy" onChange={onChangeGenreHandler} /><label htmlFor="comedy">Comedy</label>
                            <input type="checkbox" id="fantasy" value="fantasy" onChange={onChangeGenreHandler} /><label htmlFor="fantasy">Fantasy</label>
                            <input type="checkbox" id="crime" value="crime" onChange={onChangeGenreHandler} /><label htmlFor="crime">Crime</label>
                            <input type="checkbox" id="drama" value="drama" onChange={onChangeGenreHandler} /><label htmlFor="drama">Drama</label>
                            <input type="checkbox" id="music" value="music" onChange={onChangeGenreHandler} /><label htmlFor="music">Music</label>
                            <input type="checkbox" id="adventure" value="adventure" onChange={onChangeGenreHandler} /><label htmlFor="adventure">Adventure</label>
                            <input type="checkbox" id="history" value="history" onChange={onChangeGenreHandler} /><label htmlFor="history">History</label>
                            <input type="checkbox" id="thriller" value="thriller" onChange={onChangeGenreHandler} /><label htmlFor="thriller">Thriller</label>
                            <input type="checkbox" id="animation" value="animation" onChange={onChangeGenreHandler} /><label htmlFor="animation">Animation</label>
                            <input type="checkbox" id="family" value="family" onChange={onChangeGenreHandler} /><label htmlFor="family">Family</label>
                            <input type="checkbox" id="mystery" value="mystery" onChange={onChangeGenreHandler} /><label htmlFor="mystery">Mystery</label>
                            <input type="checkbox" id="biography" value="biography" onChange={onChangeGenreHandler} /><label htmlFor="biography">Biography</label>
                            <input type="checkbox" id="action" value="action" onChange={onChangeGenreHandler} /><label htmlFor="action">Action</label>
                            <input type="checkbox" id="filmNoir" value="filmNoir" onChange={onChangeGenreHandler} /><label htmlFor="filmNoir">Film-Noir</label>
                            <input type="checkbox" id="romance" value="romance" onChange={onChangeGenreHandler} /><label htmlFor="romance">Romance</label>
                            <input type="checkbox" id="sciFi" value="sciFi" onChange={onChangeGenreHandler} /><label htmlFor="sciFi">Sci-Fi</label>
                            <input type="checkbox" id="war" value="war" onChange={onChangeGenreHandler} /><label htmlFor="war">War</label>
                            <input type="checkbox" id="western" value="western" onChange={onChangeGenreHandler} /><label htmlFor="western">Western</label>
                            <input type="checkbox" id="horror" value="horror" onChange={onChangeGenreHandler} /><label htmlFor="horror">Horror</label>
                            <input type="checkbox" id="musical" value="musical" onChange={onChangeGenreHandler} /><label htmlFor="musical">Musical</label>
                            <input type="checkbox" id="sport" value="sport" onChange={onChangeGenreHandler} /><label htmlFor="sport">Sport</label>
                        </div>
                    </div>
                    <input type="submit" id='submit' value="Submit" />
                </form>
            </div>
        </div>
    );
};