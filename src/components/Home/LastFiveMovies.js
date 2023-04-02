import { Link } from "react-router-dom";

export const LastFiveMovies = ({
    _id,
    title,
    year,
    imageUrl,
}) => {
    return (
        <div className="wrapper">
            <div className="card"><img src={imageUrl} alt={_id} />
                <div className="info">
                    <h1 data-testid="title">{`${title} (${year})`}</h1>
                    <Link to={`/details/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};