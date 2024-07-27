import "./Menu.css";
import MenuItem from "./components/MenuItem/MenuItem.jsx";

const Menu = ({ items }) => {
    console.log(items)
    return (
        <nav className="menu">
            <ul className="menu__list">
                {items.map((item, idx) => (
                    <MenuItem
                        icon={item.icon}
                        href={item.href}
                        dropdown={item.dropdown}
                        key={idx}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;