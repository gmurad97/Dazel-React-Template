import { useContext, useEffect, useState } from "react";
import "./Menu.css";
import { AuthContext } from "../../../../../../context/AuthContext.jsx";
import { CalendarItem, EnvelopeItem, BellItem } from "./components/MenuItem/MenuItem.jsx";
import Language from "./components/Language/Language.jsx";
import Profile from "./components/Profile/Profile.jsx";

import DazelApi from "../../../../../../api/DazelApi.js";

const Menu = () => {
    const { userData, Logout } = useContext(AuthContext);
    const [envelopeData, setEnvelopeData] = useState({});
    const [notificationList, setNotificationList] = useState({});

    useEffect(() => {
        DazelApi.getEnvelopeData().then(response => setEnvelopeData(response));
        DazelApi.getNotificationData().then(response => setNotificationList(response));
    }, []);

    return (
        <div className="topbar__menu">
            <CalendarItem />
            <EnvelopeItem envelopeData={envelopeData} />
            <BellItem bellData={notificationList} />




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