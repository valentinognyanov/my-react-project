import styles from './Navigation.module.css';

export const Navigation = ({
    children
}) => {
    return (
        <nav>
            <ul className={styles.navigation}>
              {children}
            </ul>
        </nav>
    );
};