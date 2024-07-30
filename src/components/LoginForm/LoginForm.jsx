import { useContext, useEffect, useRef } from "react";
import "./LoginForm.css";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const { Login, isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        if (isAuth)
            navigate('/dashboard', { replace: true });
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        if (loginRef.current && passwordRef.current && Login(loginRef.current.value, passwordRef.current.value)) {
            navigate('/dashboard', { replace: true });
        }
    }

    return (
        <section className="section__login">
            <form action="#" method="post" encType="application/json">
                <div className="login__form">
                    <h1 className="login__heading">Authorization</h1>
                </div>
                <div className="login__form">
                    <label htmlFor="input__login">Login:</label>
                    <input type="text" id="input__login" placeholder="Enter login..." ref={loginRef} />
                </div>
                <div className="login__form">
                    <label htmlFor="input__login">Password:</label>
                    <input type="password" id="input__password" placeholder="Enter password..." ref={passwordRef} />
                </div>
                <div className="login__form">
                    <button type="submit" className="btn__login" onClick={(event) => handleLogin(event)}>Login</button>
                </div>
            </form>
        </section>
    );
}

export default LoginForm;