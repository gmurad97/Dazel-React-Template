import "./Target.css";
import ArcProgressBar from "./components/ProgressBar/ProgressBar.jsx";

const Target = () => {
    return (
        <div className="target">
            <div className="target__header">
                <div className="target__heading">
                    <h1 className="target__title">Target</h1>
                    <p className="target__description">Revenue Target</p>
                </div>
                <div className="target__icon">
                    <i className="fi fi-sr-menu-dots-vertical"></i>
                </div>
            </div>
            <div className="target__progress-bar">
                <ArcProgressBar strokeWidth={4} progress={100}>
                    test invariant
                </ArcProgressBar>
            </div>
            <div className="target__detail">
                <h1 className="target__detail-today"></h1>
                <div className="target__statistic">
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">Target</h1>
                        <div className="target__statistic-value">
                            $100k
                            <i className="fi fi-rr-caret-up"></i>
                        </div>
                    </div>
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">Revenue</h1>
                        <div className="target__statistic-value">
                            $75k
                            <i className="fi fi-rr-caret-down"></i>
                        </div>
                    </div>
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">This Week</h1>
                        <div className="target__statistic-value">
                            $1.5k
                            <i className="fi fi-rr-caret-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Target;