import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './Card';
import './Catalog.css';

export const Catalog = ({
    movies,
}) => {
    return (
        <section className='catalog-body'>
            {movies.map(x => <Card key={x._id} {...x} />)}
        </section>
    );
};