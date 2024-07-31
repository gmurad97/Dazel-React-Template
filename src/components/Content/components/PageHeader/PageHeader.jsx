import { useContext } from "react";
import "./PageHeader.css";
import { FilterContext } from "../../../../context/FilterContext.jsx";
import { AuthContext } from "../../../../context/AuthContext.jsx";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";

const PageHeader = () => {
    const { getTranslate } = useContext(LanguageContext);
    const { userData } = useContext(AuthContext);

    const {
        filter,
        setLast24Hours,
        setLast7Days,
        setLast30Days,
        setLast12Months,
        setAllTime
    } = useContext(FilterContext);

    return (
        <div className="page-header">
            <div className="page-header__welcome">
                <h1 className="page-header__welcome-title">
                    {getTranslate("page_header_welcome_title")} {userData.firstName}
                </h1>
                <p className="page-header__welcome-description">
                    {getTranslate("page_header_welcome_description_part1")}
                    {userData.firstName}
                    {getTranslate("page_header_welcome_description_part2")}
                </p>
            </div>
            <div className="page-header__filter-container">
                <div className="page-header__filter">
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "ALL_TIME" && "page-header__filter-btn--active"}`}
                        onClick={() => setAllTime()}
                    >
                        {getTranslate("page_header_filter_all_date")}
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_12_MONTHS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast12Months()}
                    >
                        {getTranslate("page_header_filter_12_months")}
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_30_DAYS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast30Days()}
                    >
                        {getTranslate("page_header_filter_30_days")}
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_7_DAYS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast7Days()}
                    >
                        {getTranslate("page_header_filter_7_days")}
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_24_HOURS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast24Hours()}
                    >
                        {getTranslate("page_header_filter_24_hour")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;