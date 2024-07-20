import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = ({ href, src }) => {
    return (
        <figure className="logo__container">
            <div className="logo__wrapper">
                <Link to={href}>
                    <img src={src} className="logo__svg" alt="Logo Dark" />
                </Link>
            </div>
        </figure>
    );
}

export default Logo;