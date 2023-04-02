import './Paginate.css';

export const Paginate = ({
    moviesPerPage,
    totalMovies,
    paginate,
    previousPage,
    nextPage,
}) => {

    return (
        <div className="pagination-container">
            <ul className="pagination-ul">
                <button onClick={previousPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </ul>
        </div>
    );
};