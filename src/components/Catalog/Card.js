import { Link } from "react-router-dom";

export const Card = ({
    _id,
    title,
    year,
    imageUrl,
    genres
}) => {
    return (
        <div className="wrapper">
            <div className="card"><img src={imageUrl} alt={_id} />
                <div className="info">
                    <h1>{`${title} (${year})`}</h1>
                    <p>{genres}</p>
                    <Link to={`/details/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};