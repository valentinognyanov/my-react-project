import { Link } from "react-router-dom";

import './Register.css';

export const Register = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="left">
                    <div className="login">Register</div>
                    <span>You allready have an account?
                        <button><Link to={"/login"}>Click here</Link></button>
                    </span>
                </div>
                <div className="right">
                    <div className="reg-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />

                        <label htmlFor="password">Repeat Password</label>
                        <input type="password" name="repeatPassword" id="repeatPassword" />

                        <input type="submit" id="submit" value="Register" />
                    </div>
                </div>
            </div>
        </div>
    );
};