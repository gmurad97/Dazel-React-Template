import "./Menu.css";
import ProfilePng from "../../assets/img/profile_img.png";
import { CalendarItem, EnvelopeItem, BellItem } from "./components/MenuItem/MenuItem.jsx";
import Language from "./components/Language/Language.jsx";
import Profile from "./components/Profile/Profile.jsx";

const Menu = () => {
    return (
        <div className="topbar__menu">
            <CalendarItem />
            <EnvelopeItem badgeCount={2} />
            <BellItem badgeCount={3} />
            <Language />
            <hr className="topbar__divider" />
            <Profile full_name="Jay Hargudson" position="Manager" img={ProfilePng} />
        </div>
    );
}

export default Menu;