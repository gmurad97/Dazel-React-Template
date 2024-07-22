import "./Topbar.css";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";

const Topbar = () => {
    return (
        <nav className="topbar">
            <Search />
            <Menu />
        </nav>
    );
}

export default Topbar;