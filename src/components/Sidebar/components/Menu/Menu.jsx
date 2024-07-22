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
        "name": "Blank",
        "icon": "fi fi-sr-empty-set",
        "href": "/blank",
        "dropdown": [],
    },
    {
        "name": "E-Commerce",
        "icon": "fi fi-sr-shopping-cart",
        "href": "/e-commerce",
        "dropdown": [
            {
                "name": "E-Commerce 1",
                "href": "/e-commerce/1",
            },
            {
                "name": "E-Commerce 2",
                "href": "/e-commerce/2",
            },
        ],
    },
    {
        "name": "Project",
        "icon": "fi fi-sr-assept-document",
        "href": "/project",
        "dropdown": [],
    },
    {
        "name": "Contact",
        "icon": "fi fi-sr-comment-user",
        "href": "/contact",
        "dropdown": [
            {
                "name": "Contact 1",
                "href": "/contact/1",
            },
            {
                "name": "Contact 2",
                "href": "/contact/2",
            },
        ],
    },
    {
        "name": "Finance",
        "icon": "fi fi-sr-money",
        "href": "/finance",
        "dropdown": [],
    },
    {
        "name": "File Manager",
        "icon": "fi fi-sr-folder",
        "href": "/file-manager",
        "dropdown": [],
    },
    {
        "name": "Chat",
        "icon": "fi fi-sr-comment-alt",
        "href": "/chat",
        "dropdown": [],
    },
    {
        "name": "Calendar",
        "icon": "fi fi-sr-calendar",
        "href": "/calendar",
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