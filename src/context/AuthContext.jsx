import { useState, createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        is_logged: true
    });

    const Login = (username, password) => {
        let success = false;
        setAuth((prevData) => {
            if (username === "admin" && password === "123") {
                success = true;
                return { ...prevData, is_logged: true };
            }
            return prevData;
        });
        return success;
    }

    const Logout = () => {
        setAuth((prevData) => {
            if (prevData.is_logged) {
                return { ...prevData, is_logged: false };
            }
            return prevData;
        });
    }

    const isAuth = auth.is_logged;

    return (
        <AuthContext.Provider value={{ isAuth, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
