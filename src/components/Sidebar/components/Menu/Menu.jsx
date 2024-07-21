import "./Menu.css";
import MenuItem from "./components/MenuItem/MenuItem.jsx";

const menuItems = [
    {
        "name": "Dashboard",
        "icon": "fi fi-sr-apps",
        "href": "/dashboard",
        "dropdown": [],
    },
    {
        "name": "E-Commerce",
        "icon": "fi fi-sr-shopping-cart",
        "href": "/#",
        "dropdown": [
            {
                "name": "E-Commerce 1",
                "href": "/#",
            },
            {
                "name": "E-Commerce 2",
                "href": "/#",
            },
        ],
    },
    {
        "name": "Project",
        "icon": "fi fi-sr-assept-document",
        "href": "/#",
        "dropdown": [],
    },
    {
        "name": "Contact",
        "icon": "fi fi-sr-comment-user",
        "href": "/#",
        "dropdown": [
            {
                "name": "Contact 1",
                "href": "/#",
            },
            {
                "name": "Contact 2",
                "href": "/#",
            },
        ],
    },
    {
        "name": "Finance",
        "icon": "fi fi-sr-money",
        "href": "/#",
        "dropdown": [],
    },
    {
        "name": "File Manager",
        "icon": "fi fi-sr-folder",
        "href": "/#",
        "dropdown": [],
    },
    {
        "name": "Chat",
        "icon": "fi fi-sr-comment-alt",
        "href": "/#",
        "dropdown": [],
    },
    {
        "name": "Calendar",
        "icon": "fi fi-sr-calendar",
        "href": "/#",
        "dropdown": [],
    }
]

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                {menuItems.map((item, idx) => (
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