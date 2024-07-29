import { useContext } from "react";
import "./PageHeader.css";
import { FilterContext } from "../../../../context/FilterContext.jsx";

const PageHeader = () => {
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
                <h1 className="page-header__welcome-title">Welcome Back John</h1>
                <p className="page-header__welcome-description">Lorem ipsum dolor si amet welcome back johny</p>
            </div>
            <div className="page-header__filter-container">
                <div className="page-header__filter">
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "ALL_TIME" && "page-header__filter-btn--active"}`}
                        onClick={() => setAllTime()}
                    >
                        All Date
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_12_MONTHS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast12Months()}
                    >
                        12 Months
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_30_DAYS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast30Days()}
                    >
                        30 Days
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_7_DAYS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast7Days()}
                    >
                        7 Days
                    </button>
                    <button
                        className={`page-header__filter-btn 
                            ${filter === "LAST_24_HOURS" && "page-header__filter-btn--active"}`}
                        onClick={() => setLast24Hours()}
                    >
                        24 Hour
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;