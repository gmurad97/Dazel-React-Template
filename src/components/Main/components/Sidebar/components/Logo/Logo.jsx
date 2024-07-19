import "./Logo.css";
import LogoSvg from "./assets/img/logo_dark.svg";

const Logo = () => {
    return (
        <div className="logo__container">
            <div className="logo">
                <img src={LogoSvg} className="logo__svg" alt="Logo Dark" />
            </div>
        </div>
    );
}

export default Logo;