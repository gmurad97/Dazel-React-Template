import "./Logo.css";

const Logo = ({ img, href, title, isCollapsed }) => {
    return (
        <figure className={`logo ${isCollapsed && "collapsed"}`}>
            {isCollapsed ? (
                <div className="logo__preview">
                    <img src={img} className="logo__img" alt="Logo Dark" />
                </div>
            ) : (
                <a href={href} className="logo__link">
                    <div className="logo__img-container">
                        <img src={img} className="logo__img" alt="Logo Dark" />
                    </div>
                    <div className="logo__title-container">
                        <span className="logo__title">{title}</span>
                    </div>
                </a>
            )}
        </figure>
    );
}

export default Logo;