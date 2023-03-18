import { Card } from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalog.css';

export const Catalog = ({
    movies,
}) => {
    return (
        <section className='catalog-body'>
            {movies.map(x => <Card key={x._id} {...x} />)}

            {movies.length === 0 && (
                <h2 className='no-movies'>There are no movies yet...</h2>
            )}
        </section>
    );
};