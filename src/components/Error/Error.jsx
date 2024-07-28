import { Link } from "react-router-dom";
import "./Error.css";

const Error = ({ errorCode }) => {
    if (errorCode === 404) {
        return (
            <div className="error">
                <h1 className="error__code">404 Not Found</h1>
                <p className="error__description">Sorry, the page you’re looking for could not be found.</p>
                <div className="error__advice">
                    <p className="error__advice-title">Return to the</p>
                    <Link className="error__advice-link" to="/dashboard">Dashboard</Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="error">
                <h1 className="error__code">Unexpected Error</h1>
                <p className="error__description">We’re sorry, but something went wrong. Please try again later.</p>
            </div>
        );
    }
}

export default Error;