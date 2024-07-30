import { useContext } from "react";
import "./Menu.css";
import ProfilePng from "../../assets/img/profile_img.png";
import { CalendarItem, EnvelopeItem, BellItem } from "./components/MenuItem/MenuItem.jsx";
import Language from "./components/Language/Language.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { AuthContext } from "../../../../../../context/AuthContext.jsx";

const Menu = () => {
    const { isAuth, Login, Logout } = useContext(AuthContext);

    return (
        <div className="topbar__menu">
            {isAuth && <CalendarItem />}
            {isAuth && <EnvelopeItem badgeCount={2} />}
            {isAuth && <BellItem badgeCount={3} />}
            <Language />
            <hr className="topbar__divider" />
            <Profile full_name="Jay Hargudson" position="Manager" img={ProfilePng} isLogged={isAuth} />
        </div>
    );
}

export default Menu;