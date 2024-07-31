import { useContext } from "react";
import "./Menu.css";
import { CalendarItem, EnvelopeItem, BellItem } from "./components/MenuItem/MenuItem.jsx";
import Language from "./components/Language/Language.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { AuthContext } from "../../../../../../context/AuthContext.jsx";

const Menu = () => {
    const { userData, Logout } = useContext(AuthContext);

    return (
        <div className="topbar__menu">
            <CalendarItem />
            <EnvelopeItem badgeCount={2} />
            <BellItem badgeCount={3} />
            <Language />
            <hr className="topbar__divider" />
            <Profile
                full_name={`${userData.firstName} ${userData.lastName}`}
                position={`${userData.position}`}
                img={`${userData.profileImg}`}
                onLogout={Logout}
            />
        </div>
    );
}

export default Menu;