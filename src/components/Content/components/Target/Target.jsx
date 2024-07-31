import { useContext } from "react";
import "./Target.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import ProgressBar from "./components/ProgressBar/ProgressBar.jsx";

const Target = () => {
    const { getTranslate } = useContext(LanguageContext);

    return (
        <div className="target">
            <div className="target__header">
                <div className="target__heading">
                    <h1 className="target__title">{getTranslate("target_title")}</h1>
                    <p className="target__description">{getTranslate("target_description")}</p>
                </div>
                <div className="target__icon">
                    <i className="fi fi-sr-menu-dots-vertical"></i>
                </div>
            </div>
            <div className="target__progress-bar">
                <ProgressBar strokeWidth={8} progress={75.55}>
                    <div className="target__progress-bar-detail">
                        <span className="target__pbd-percent">
                            +10%
                            <i className="fi fi-rr-caret-up"></i>
                        </span>
                        <span className="target__pbd-today">
                            +$150 {getTranslate("target_progress_today")}
                        </span>
                    </div>
                </ProgressBar>
            </div>
            <div className="target__detail">
                <h1 className="target__detail-today">
                    {getTranslate("target_detail_today_part1")}
                    <span className="target__detail-today-bold"> $150 </span>
                    {getTranslate("target_detail_today_part2")}
                </h1>
                <div className="target__statistic">
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">{getTranslate("target_statistic_target")}</h1>
                        <div className="target__statistic-value target__statistic-value--plus">
                            $100k
                            <i className="fi fi-rr-caret-up"></i>
                        </div>
                    </div>
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">{getTranslate("target_statistic_revenue")}</h1>
                        <div className="target__statistic-value target__statistic-value--minus">
                            $75k
                            <i className="fi fi-rr-caret-down"></i>
                        </div>
                    </div>
                    <div className="target__statistic-item">
                        <h1 className="target__statistic-title">{getTranslate("target_statistic_this_week")}</h1>
                        <div className="target__statistic-value target__statistic-value--plus">
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