import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {
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
                    <div className="form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                        <input type="submit" id="submit" value="Login" />
                    </div>
                </div>
            </div>
        </div>
    );
};