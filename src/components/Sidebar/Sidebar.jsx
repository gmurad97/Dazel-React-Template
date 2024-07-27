import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.jsx";
import "./Sidebar.css";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import HideButton from "./components/HideButton/HideButton.jsx";
import LogoSvg from "./assets/img/logo.svg";

const Sidebar = () => {

    const { getTranslate } = useContext(LanguageContext);

    const menuItems = [
        {
            "name": getTranslate("dashboard"),
            "icon": "fi fi-sr-apps",
            "href": "/dashboard",
            "dropdown": [],
        }
    ]

    return (
        <aside className="sidebar">
            <Logo img={LogoSvg} href="/dashboard" title="Dazel" />
            <Menu items={menuItems} />
            <HideButton />
        </aside>
    );
}

export default Sidebar;