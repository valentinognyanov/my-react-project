import { NavLink } from 'react-router-dom';

import { Navigation } from "./Navigation";
import styles from './Navigation.module.css';

export const MainNavigation = () => {
    return (
        <Navigation>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/" >Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/catalog" >Catalog</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/profile/:userId" >My Profile</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/about" >About</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/register" >Register</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/login" >Login</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to="/logout" >Logout</NavLink></li>
        </Navigation>
    );
}