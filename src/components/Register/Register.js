import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import './Register.css';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        repeatPassword: '',
    }, onRegisterSubmit);

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
                    <form className="reg-form" method="POST" onSubmit={onSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={values.email} onChange={changeHandler} />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={values.password} onChange={changeHandler} />

                        <label htmlFor="password">Repeat Password</label>
                        <input type="password" name="repeatPassword" id="repeatPassword" value={values.repeatPassword} onChange={changeHandler} />

                        <input type="submit" id="submit" value="Register" />
                    </form>
                </div>
            </div>
        </div>
    );
};