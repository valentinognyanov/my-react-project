import { useEffect, useState } from 'react';
import './Search.css';

export const Search = () => {

    const [input, setInput] = useState('');

    // useEffect(() => {

    // }, '');

    const onChangeSearchHandler = (e) => {
        e.preventDefault();

        
    }

    return (
        <div className="wrap">
            <div className="search">
                <input value={input} onChange={onChangeSearchHandler} type="text" className="searchTerm" placeholder="Search..." />
                <button type="submit" className="searchButton"></button>
            </div>
            <div className="search-result">
                
            </div>
        </div>
    );
};