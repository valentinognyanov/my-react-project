import { useForm } from '../../hooks/useForm';

import './Create.css';

export const Create = ({
    onCreateMovieSubmit,
}) => {
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

    // const onChangeGenreHandler = (e) => {
    //     if (e.target.checked) {
    //         setValues(state => ({...state, genres: e.target.id}))
    //     } else {
    //         setValues(values.filter(x => x.genres.id !== e.target.id));
    //     }
    // };

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
                            <input type="checkbox" name="genres" id="comedy" /><label htmlFor="comedy">Comedy</label>
                            <input type="checkbox" name="genres" id="fantasy" /><label htmlFor="fantasy">Fantasy</label>
                            <input type="checkbox" name="genres" id="crime" /><label htmlFor="crime">Crime</label>
                            <input type="checkbox" name="genres" id="drama" /><label htmlFor="drama">Drama</label>
                            <input type="checkbox" name="genres" id="music" /><label htmlFor="music">Music</label>
                            <input type="checkbox" name="genres" id="adventure" /><label htmlFor="adventure">Adventure</label>
                            <input type="checkbox" name="genres" id="history" /><label htmlFor="history">History</label>
                            <input type="checkbox" name="genres" id="thriller" /><label htmlFor="thriller">Thriller</label>
                            <input type="checkbox" name="genres" id="animation" /><label htmlFor="animation">Animation</label>
                            <input type="checkbox" name="genres" id="family" /><label htmlFor="family">Family</label>
                            <input type="checkbox" name="genres" id="mystery" /><label htmlFor="mystery">Mystery</label>
                            <input type="checkbox" name="genres" id="biography" /><label htmlFor="biography">Biography</label>
                            <input type="checkbox" name="genres" id="action" /><label htmlFor="action">Action</label>
                            <input type="checkbox" name="genres" id="filmNoir" /><label htmlFor="filmNoir">Film-Noir</label>
                            <input type="checkbox" name="genres" id="romance" /><label htmlFor="romance">Romance</label>
                            <input type="checkbox" name="genres" id="sciFi" /><label htmlFor="sciFi">Sci-Fi</label>
                            <input type="checkbox" name="genres" id="war" /><label htmlFor="war">War</label>
                            <input type="checkbox" name="genres" id="western" /><label htmlFor="western">Western</label>
                            <input type="checkbox" name="genres" id="horror" /><label htmlFor="horror">Horror</label>
                            <input type="checkbox" name="genres" id="musical" /><label htmlFor="musical">Musical</label>
                            <input type="checkbox" name="genres" id="sport" /><label htmlFor="sport">Sport</label>
                        </div>
                    </div>
                    <input type="submit" id='submit' value="Submit" />
                </form>
            </div>
        </div>
    );
};