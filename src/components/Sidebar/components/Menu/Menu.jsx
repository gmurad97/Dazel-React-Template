import React, { useState } from 'react';
import './Menu.css';
import MenuItem from './components/MenuItem/MenuItem.jsx';

const Menu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const handleMenuClick = (index) => {
        setOpenMenuIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <nav className="menu">
            <ul className="menu__list">
                <MenuItem
                    href="/dashboard"
                    icon="fi fi-sr-apps"
                    dropdown={[]}
                    isOpen={openMenuIndex === 0}
                    onMenuClick={() => handleMenuClick(0)}
                >
                    Dashboard
                </MenuItem>
                <MenuItem
                    href="/#"
                    icon="fi fi-sr-shopping-cart"
                    dropdown={[
                        { name: "Example 1", link: "/#" },
                        { name: "Example 2", link: "/#" }
                    ]}
                    isOpen={openMenuIndex === 1}
                    onMenuClick={() => handleMenuClick(1)}
                >
                    E-Commerce
                </MenuItem>
                <MenuItem
                    href="/#"
                    icon="fi fi-sr-assept-document"
                    dropdown={[]}
                    isOpen={openMenuIndex === 2}
                    onMenuClick={() => handleMenuClick(2)}
                >
                    Project
                </MenuItem>
                <MenuItem
                    href="/#"
                    icon="fi fi-sr-comment-user"
                    dropdown={[
                        { name: "Example 1", link: "/#" },
                        { name: "Example 2", link: "/#" }
                    ]}
                    isOpen={openMenuIndex === 3}
                    onMenuClick={() => handleMenuClick(3)}
                >
                    Contact
                </MenuItem>
                <MenuItem
                    href="/#"
                    icon="fi fi-sr-money"
                    dropdown={[]}
                    isOpen={openMenuIndex === 4}
                    onMenuClick={() => handleMenuClick(4)}
                >
                    Finance
                </MenuItem>
                <MenuItem
                    href="/#"
                    icon="fi fi-sr-folder"
                    dropdown={[]}
                    isOpen={openMenuIndex === 5}
                    onMenuClick={() => handleMenuClick(5)}
                >
                    File Manager
                </MenuItem>
                <MenuItem
                    href="/#"
                    icon="fi fi-sr-comment-alt"
                    dropdown={[]}
                    isOpen={openMenuIndex === 6}
                    onMenuClick={() => handleMenuClick(6)}
                >
                    Chat
                </MenuItem>
                <MenuItem
                    href="/#"
                    icon="fi fi-sr-calendar"
                    dropdown={[]}
                    isOpen={openMenuIndex === 7}
                    onMenuClick={() => handleMenuClick(7)}
                >
                    Calendar
                </MenuItem>
            </ul>
        </nav>
    );
}

export default Menu;
