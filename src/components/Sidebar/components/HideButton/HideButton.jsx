import "./HideButton.css";

const HideButton = () => {
    return (
        <button className="hide-btn">
            <div className="hide-btn__text-container">
                <span className="hide-btn__text">Hide Menu</span>
            </div>
            <div className="hide-btn__icon-container">
                <i className="fi fi-sr-caret-left"></i>
            </div>
        </button>
    );
}

export default HideButton;