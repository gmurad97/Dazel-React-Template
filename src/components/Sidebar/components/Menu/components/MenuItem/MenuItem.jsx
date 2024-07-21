import "./MenuItem.css";
import { NavLink } from "react-router-dom";

const MenuItem = ({ icon, href, dropdown, children }) => {
    const setActiveClass = ({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link";

    return (
        <li className="menu__item">
            <NavLink to={href} className={setActiveClass}>
                <div className="menu__content">
                    <div className="menu__icon-wrapper">
                        <i className={icon}></i>
                    </div>
                    <div className="menu__text-wrapper">
                        <span className="menu__text">{children}</span>
                    </div>
                </div>
                {dropdown.length > 0 && (
                    <div className="menu__icon-wrapper">
                        <i className="fi fi-sr-caret-down"></i>
                    </div>
                )}
            </NavLink>
        </li>
    )
}

export default MenuItem;