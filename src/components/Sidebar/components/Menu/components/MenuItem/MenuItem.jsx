import React, { useRef, useEffect } from 'react';
import './MenuItem.css';

const MenuItem = ({ href, icon, dropdown, isOpen, onMenuClick, children }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (dropdownRef.current) {
            dropdownRef.current.style.maxHeight = isOpen ? (dropdown.length * 62 + 32) + "px" : "0";
        }
    }, [isOpen, dropdown.length]);

    return (
        dropdown.length > 0 ? (
            <li className="menu__item" onClick={onMenuClick}>
                <a href="/#" onClick={(e) => e.preventDefault()} className="menu__link">
                    <i className={icon}></i>
                    <span className="menu__link-name">{children}</span>
                    <i 
                        className="fi fi-sr-caret-down" 
                        style={{ 
                            transition: "transform 0.3s ease",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" 
                        }}
                    ></i>
                </a>
                <ul ref={dropdownRef} className="menu__list-dropdown" style={{ overflow: "hidden", transition: "max-height 0.3s ease" }}>
                    {dropdown.map((item, idx) => (
                        <li className="menu__item" key={idx}>
                            <a href={item.link} className="menu__link">
                                <i className="fi fi-sr-bullet"></i>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        ) : (
            <li className="menu__item">
                <a href={href} className="menu__link">
                    <i className={icon}></i>
                    {children}
                </a>
            </li>
        )
    );
};

export default MenuItem;
