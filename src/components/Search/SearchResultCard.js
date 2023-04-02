import { Link } from "react-router-dom";

export const SearchResultCard = ({
    _id,
    title,
    year,
    genres,
    imageUrl,
}) => {
    return (
        <div className="wrapper">
            <div className="card"><img src={imageUrl} alt={_id} />
                <div className="info">
                    <h1 data-testid="title">{`${title} (${year})`}</h1>
                    <p data-testid="genres">{genres?.join(', ')}</p>
                    <Link to={`/details/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};