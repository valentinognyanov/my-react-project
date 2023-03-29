import { useMovieContext } from '../../contexts/MovieContext';

import { Card } from './Card';
import './Catalog.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Catalog = () => {
    const { movies } = useMovieContext();

    return (
        <section className='catalog-body'>
            {movies.map(x => <Card key={x._id} {...x} />)}

            {movies.length === 0 && (
                <h2 className='no-movies'>There are no movies yet...</h2>
            )}
        </section>
    );
};