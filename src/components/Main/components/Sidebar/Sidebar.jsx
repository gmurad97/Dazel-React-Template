import "./Sidebar.css";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Logo />
            <Menu />
        </aside>
    );
}

export default Sidebar;