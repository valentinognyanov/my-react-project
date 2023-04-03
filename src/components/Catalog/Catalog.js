import { useState } from 'react';

import { useMovieContext } from '../../contexts/MovieContext';
import { Card } from './Card';
import { Paginate } from '../Pagination/Paginate';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalog.css';

export const Catalog = () => {
    const { movies } = useMovieContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(12);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const previousPage = () => {

        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {

        if (currentPage !== Math.ceil(movies.length / moviesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <section className='catalog-body'>
                {currentMovie.map(x => <Card key={x._id} {...x} />)}

                {currentMovie.length === 0 && (
                    <h2 className='no-movies'>There are no movies yet...</h2>
                )}
            </section>

            {currentMovie.length !== 0 ? <Paginate
                previousPage={previousPage}
                nextPage={nextPage}
            /> : ''}
        </>
    );
};