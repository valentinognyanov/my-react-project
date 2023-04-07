import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory(auth.accessToken);
    const navigate = useNavigate();

    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;

        if (repeatPassword !== registerData.password) {
            return alert('Passwords must be the same.');
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/');
            return result;
        } catch (error) {
            alert(error.message);
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};