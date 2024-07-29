import { useState, createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        is_logged: false
    });

    const Login = (username, password) => {
        setAuth((prevData) => {
            if (username === "admin" && password === "123")
                return { ...prevData, is_logged: true };
        });
    }

    const Logout = () => {
        setAuth((prevData) => {
            if (prevData.is_logged)
                return { ...prevData, is_logged: false };
        });
    }

    const isAuth = () => {
        return auth?.is_logged;
    }

    return (
        <AuthContext.Provider value={{ isAuth, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };