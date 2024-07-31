import { useContext } from "react";
import "./Profile.css";
import { LanguageContext } from "../../../../../../../../context/LanguageContext";

const Profile = ({ full_name, position, img, onLogout }) => {
    const { getTranslate } = useContext(LanguageContext);
    return (
        <div className="topbar__profile">
            <div className="topbar__profile-img-container">
                <img src={img} className="topbar__profile-img" alt={getTranslate("profile_img_alt")} />
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
                        <span className="topbar__pd-item-name">{getTranslate("profile_profile")}</span>
                    </li>
                    <li className="topbar__pd-item">
                        <span className="topbar__pd-item-name">{getTranslate("profile_setting")}</span>
                    </li>
                    <li className="topbar__pd-item logout" onClick={() => onLogout()}>
                        <span className="topbar__pd-item-name">{getTranslate("profile_sign_out")}</span>
                        <span className="topbar__pd-item-icon">
                            <i className="fi fi-rr-sign-out-alt"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;