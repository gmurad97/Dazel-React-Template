import "./MenuItem.css";

const MenuItem = ({ icon, badgeCount }) => {
    return (
        <div className="topbar__menu-item">
            <i className={icon}></i>
            {badgeCount > 0 && <span className="topbar__menu-badge">{badgeCount}</span>}
        </div>
    );
}

export default MenuItem;