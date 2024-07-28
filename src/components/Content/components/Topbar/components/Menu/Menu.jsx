import "./Menu.css";
/* import LangEnPng from "../../assets/img/lang_en.png"; */
import ProfilePng from "../../assets/img/profile_img.png";

import MenuItem from "./components/MenuItem/MenuItem.jsx";
import Language from "./components/Language/Language.jsx";
import Profile from "./components/Profile/Profile.jsx";

const Menu = () => {
    return (
        <div className="topbar__menu">
            <MenuItem icon="fi fi-sr-calendar" badgeCount={0} />
            <MenuItem icon="fi fi-sr-envelope" badgeCount={4} />
            <MenuItem icon="fi fi-sr-bell" badgeCount={7} />




            <Language />
            <hr className="topbar__divider" />




            <Profile full_name="Jay Hargudson" position="Manager" img={ProfilePng} />
        </div>
    );
}

export default Menu;