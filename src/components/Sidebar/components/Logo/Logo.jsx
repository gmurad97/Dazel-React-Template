import "./Logo.css";

const Logo = ({ img, href, title }) => {
    return (
        <figure className="logo">
            <a href={href} className="logo__link">
                <div className="logo__img-container">
                    <img src={img} className="logo__img" alt="Logo Dark" />
                </div>
                <div className="logo__title-container">
                    <span className="logo__title">{title}</span>
                </div>
            </a>
        </figure>
    );
}

export default Logo;