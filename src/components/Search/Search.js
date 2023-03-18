import './Search.css';

export const Search = () => {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search..." />
                <button type="submit" className="searchButton"></button>
            </div>
        </div>
    );
};