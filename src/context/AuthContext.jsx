import { useState, useContext, createContext } from "react";
import { LanguageContext } from "./LanguageContext.jsx";
import ProfileImage from "./assets/img/profile_img.png";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const { getTranslate } = useContext(LanguageContext);

    const [authData, setAuthData] = useState({
        isLogged: true, // WARNING! This is fake Auth...
        userData: {
            firstName: "Jay",
            lastName: "Hargudson",
            position: "Manager",
            profileImg: ProfileImage,
            isOnline: true,
        },
        error: null
    });

    const Login = (username, password) => {
        setAuthData((prevData) => {
            if (username === "root" && password === "123") {
                return { ...prevData, isLogged: true };
            }
            else if (!username || !password) {
                return { ...prevData, isLogged: false, error: getTranslate("auth_empty_credentials") };
            }
            else {
                return { ...prevData, isLogged: false, error: getTranslate("auth_incorrect_credentials") };
            }
        });
    }

    const Logout = () => {
        setAuthData((prevData) => {
            if (prevData.isLogged)
                return { ...prevData, isLogged: false, error: null }
            return { ...prevData };
        })
    }

    const isAuth = authData.isLogged;
    const userData = authData.userData;
    const Error = authData.error;

    return (
        <AuthContext.Provider value={{ Login, Logout, isAuth, userData, Error }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
