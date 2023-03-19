import { NavLink } from "react-router-dom";

export const Card = ({
    _id,
    title,
    year,
    imageUrl,
    genres
}) => {
    return (
        // <div className="card">
        //     <img src={imageUrl} className="card-img-top" alt={title} />
        //     <h5 className="card-title">{`${title} (${year})`}</h5>
        //     <h6 className="card-genres">{genres.join(', ')}</h6>
        //     <Link to={`/details/${_id}`} className="btn btn-dark">Details</Link>
        // </div>
        <div className="wrapper">
            <div className="card"><img src={imageUrl} />
                <div className="info">
                    <h1>{`${title} (${year})`}</h1>
                    <p>{genres.join(', ')}</p>
                    <NavLink to={`/details/${_id}`}>Details</NavLink>
                </div>
            </div>
        </div>
    );
};

/*

*/