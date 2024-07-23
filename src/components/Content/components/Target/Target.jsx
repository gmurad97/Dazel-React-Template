import "./Target.css";
import ProgressBar from "./components/ProgressBar/ProgressBar.jsx";

const Target = () => {
    return (
        <div className="target">
            <ProgressBar width="150px" height="15px" value="20%" />
        </div>
    );
}

export default Target;