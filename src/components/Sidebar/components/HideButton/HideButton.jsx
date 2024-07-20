import "./HideButton.css";

const HideButton = () => {
    return (
        <button className="sidebar__hide-btn">
            <span className="hide-btn__name">Hide Menu</span>
            <i className="fi fi-sr-caret-left"></i>
        </button>
    );
}

export default HideButton;