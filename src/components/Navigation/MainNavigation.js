import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { Navigation } from "./Navigation";
import styles from './Navigation.module.css';

export const MainNavigation = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);
    
    return (
        <Navigation>
            <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/" >Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/catalog" >Catalog</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/search" >Search</NavLink></li>
            {isAuthenticated && (
                <>
                    <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/create" >Add a movie</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/profile/:userId" >{userEmail}</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/logout" >Logout</NavLink></li>
                </>
            )}
            {!isAuthenticated && (
                <>
                    <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/register" >Register</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/login" >Login</NavLink></li>
                </>
            )}
            <li><NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to="/about" >About</NavLink></li>
        </Navigation>
    );
}