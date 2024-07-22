import LangEnPng from "../../assets/img/lang_en.png";
import ProfilePng from "../../assets/img/profile_img.png";

const Menu = () => {
    return (
        <div className="topbar__menu">
            <div className="topbar__menu-item">
                <i className="fi fi-sr-calendar"></i>
            </div>
            <div className="topbar__menu-item">
                <i className="fi fi-sr-envelope"></i>
                <span className="topbar__menu-badge">2</span>
            </div>
            <div className="topbar__menu-item">
                <i className="fi fi-sr-bell"></i>
                <span className="topbar__menu-badge">2</span>
            </div>

            <div className="topbar__menu-item topbar__menu-item--language">
                <img src={LangEnPng} alt="EN" className="topbar__language-img" />
            </div>
            
            <hr className="topbar__divider" />
            <div className="topbar__profile">
                <div className="topbar__profile-img-container">
                    <img src={ProfilePng} className="topbar__profile-img" alt="Profile Img" />
                </div>
                <div className="topbar__profile-content">
                    <h1 className="topbar__profile-name">Jay Hargudson</h1>
                    <p className="topbar__profile-position">Manager</p>
                </div>
                <div className="topbar__profile-icon">
                    <i class="fi fi-sr-caret-down"></i>
                </div>
            </div>
        </div>
    );
}

export default Menu;