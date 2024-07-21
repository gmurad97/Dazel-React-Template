import "./Sidebar.css";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import HideButton from "./components/HideButton/HideButton.jsx";
import LogoSvg from "./assets/img/logo.svg";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Logo img={LogoSvg} href="/dashboard" title="Dazel" />
            <Menu />
            <HideButton />
        </aside>
    );
}

export default Sidebar;