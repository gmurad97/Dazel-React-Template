import "./Sidebar.css";
import Logo from "./components/Logo/Logo.jsx";
import LogoSvg from "./assets/img/logo_dark.svg";
import Menu from "./components/Menu/Menu.jsx";
import HideButton from "./components/HideButton/HideButton.jsx";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Logo href="/dashboard" src={LogoSvg} />
            <Menu />
            <HideButton />
        </aside>
    );
}

export default Sidebar;