import { NavLink } from 'react-router-dom';
import styles from './PageNotFound.module.css';

export const PageNotFound = () => {
    return (
        <div className={styles['message-box']}>
            <h1>404</h1>
            <p>Page not found</p>
            <div className="button-con">
                <NavLink to='/' >Go to Home Page</NavLink>
            </div>
        </div>
    );
};