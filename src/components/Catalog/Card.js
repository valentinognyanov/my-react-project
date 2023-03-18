import { Link } from "react-router-dom";

export const Card = ({
    _id,
    title,
    year,
    imageUrl,
    genres
}) => {
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <h5 className="card-title">{title} {`(${year})`}</h5>
            <h6 className="card-genres">{genres.join(', ')}</h6>
            <Link to={`/details/${_id}`} className="btn btn-dark">Details</Link>
        </div>
    );
};