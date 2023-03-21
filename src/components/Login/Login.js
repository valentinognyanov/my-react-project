import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import './Login.css';

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <div className="page">
            <div className="container">
                <div className="left">
                    <div className="login">Login</div>
                    <span>You don't have an account?
                        <button><Link to={"/register"}>Click here</Link></button>
                    </span>
                </div>
                <div className="right">
                    <form className="form" method="POST" onSubmit={onSubmit}>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={values.email} onChange={changeHandler} />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={values.password} onChange={changeHandler} />

                        <input type="submit" id="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};