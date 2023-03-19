import './Create.css';

export const Create = () => {
    return (
        <div className='create-div'>
            <h3>Add a movie</h3>
            <div className='create-form'>
                <form method='POST'>
                    <input type="text" id="title" name="title" placeholder="Title.." />

                    <input type="number" id="year" name="year" placeholder="Year.." />

                    <input type="number" id="runtime" name="runtime" placeholder="Runtime.." />

                    <input type="text" id="director" name="director" placeholder="Director.." />

                    <input type="text" id="actors" name="actors" placeholder="Actors.." />

                    <input type="text" id="imageUrl" name="imageUrl" placeholder="ImageUrl.." />

                    <textarea type="text" id="plot" name="plot" placeholder="Plot.." />

                    <div className='ganres-checkbox'>
                        <div>
                            <h4>Genres</h4>
                            <input type="checkbox" name="choice" id="comedy" /><label htmlFor="comedy">Comedy</label>
                            <input type="checkbox" name="choice" id="fantasy" /><label htmlFor="fantasy">Fantasy</label>
                            <input type="checkbox" name="choice" id="crime" /><label htmlFor="crime">Crime</label>
                            <input type="checkbox" name="choice" id="drama" /><label htmlFor="drama">Drama</label>
                            <input type="checkbox" name="choice" id="music" /><label htmlFor="music">Music</label>
                            <input type="checkbox" name="choice" id="adventure" /><label htmlFor="adventure">Adventure</label>
                            <input type="checkbox" name="choice" id="history" /><label htmlFor="history">History</label>
                            <input type="checkbox" name="choice" id="thriller" /><label htmlFor="thriller">Thriller</label>
                            <input type="checkbox" name="choice" id="animation" /><label htmlFor="animation">Animation</label>
                            <input type="checkbox" name="choice" id="family" /><label htmlFor="family">Family</label>
                            <input type="checkbox" name="choice" id="mystery" /><label htmlFor="mystery">Mystery</label>
                            <input type="checkbox" name="choice" id="biography" /><label htmlFor="biography">Biography</label>
                            <input type="checkbox" name="choice" id="action" /><label htmlFor="action">Action</label>
                            <input type="checkbox" name="choice" id="filmNoir" /><label htmlFor="filmNoir">Film-Noir</label>
                            <input type="checkbox" name="choice" id="romance" /><label htmlFor="romance">Romance</label>
                            <input type="checkbox" name="choice" id="sciFi" /><label htmlFor="sciFi">Sci-Fi</label>
                            <input type="checkbox" name="choice" id="war" /><label htmlFor="war">War</label>
                            <input type="checkbox" name="choice" id="western" /><label htmlFor="western">Western</label>
                            <input type="checkbox" name="choice" id="horror" /><label htmlFor="horror">Horror</label>
                            <input type="checkbox" name="choice" id="musical" /><label htmlFor="musical">Musical</label>
                            <input type="checkbox" name="choice" id="sport" /><label htmlFor="sport">Sport</label>
                        </div>
                    </div>
                    <input type="submit" id='submit' value="Submit" />
                </form>
            </div>
        </div>
    );
};