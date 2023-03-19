import './Create.css';

export const Create = () => {
    return (
        <div className='create-div'>
            <h3>Add a movie</h3>
            <div className='create-form'>
                <form method='POST'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Title.." />

                    <label htmlFor="year">Year</label>
                    <input type="number" id="year" name="year" placeholder="Year.." />

                    <label htmlFor="runtime">Runtime</label>
                    <input type="number" id="runtime" name="runtime" placeholder="Runtime.." />

                    <label htmlFor="director">Director</label>
                    <input type="text" id="director" name="director" placeholder="Director.." />

                    <label htmlFor="actors">Actors</label>
                    <input type="text" id="actors" name="actors" placeholder="Actors.." />

                    <label htmlFor="plot">Plot</label>
                    <textarea type="text" id="plot" name="plot" placeholder="Plot.." />
                    
                    <label htmlFor="genre">Genre</label>
                    <select id="genre" name="genre">
                        <option value="comedy">Comedy</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="crime">Crime</option>
                        <option value="canada">Drama</option>
                        <option value="canada">Music</option>
                        <option value="canada">Adventure</option>
                        <option value="canada">History</option>
                        <option value="canada">Thriller</option>
                        <option value="canada">Canada</option>
                        <option value="canada">Animation</option>
                        <option value="canada">Family</option>
                        <option value="canada">Mystery</option>
                        <option value="usa">USA</option>
                    </select>

                    <input type="submit" id='submit' value="Submit" />
                </form>
            </div>
        </div>
    );
};