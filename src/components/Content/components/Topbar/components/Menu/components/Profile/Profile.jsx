import { useContext } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = ({ full_name, position, img, isLogged }) => {
    return (
        <>
            {isLogged ? (
                <div className="topbar__profile">
                    <div className="topbar__profile-img-container">
                        <img src={img} className="topbar__profile-img" alt="Profile Img" />
                    </div>
                    <div className="topbar__profile-content">
                        <h1 className="topbar__profile-name">{full_name}</h1>
                        <p className="topbar__profile-position">{position}</p>
                    </div>
                    <div className="topbar__profile-icon">
                        <i className="fi fi-sr-caret-down"></i>
                        <i className="fi fi-sr-caret-up"></i>
                    </div>
                    <div className="topbar__profile-dropdown">
                        <ul className="topbar__pd-list">
                            <li className="topbar__pd-item">
                                <span className="topbar__pd-item-name">Profile</span>
                            </li>
                            <li className="topbar__pd-item">
                                <span className="topbar__pd-item-name">Setting</span>
                            </li>
                            <li className="topbar__pd-item logout">
                                <span className="topbar__pd-item-name">Sign Out</span>
                                <span className="topbar__pd-item-icon">
                                    <i className="fi fi-rr-sign-out-alt"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="topbar__login-register">
                    <Link to="/signup" className="topbar__login-link">Sign-up</Link>
                    <span className="topbar__login-register-divider">/</span>
                    <Link to="/signin" className="topbar__register-link">Sign-in</Link>
                </div>
            )}
        </>
    );
}

export default Profile;