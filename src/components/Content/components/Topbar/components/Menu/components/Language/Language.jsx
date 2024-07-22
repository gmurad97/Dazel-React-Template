import "./Language.css";

const Language = ({ img }) => {
    return (
        <div className="topbar__menu-language">
            <img src={img} className="topbar__menu-language-img" alt="Language" />
        </div>
    );
}

export default Language;