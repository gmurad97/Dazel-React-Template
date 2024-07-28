import { useState, createContext } from "react";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState("ALL_TIME");

    const setLast24Hours = () => setFilter("LAST_24_HOURS");
    const setLast7Days = () => setFilter("LAST_7_DAYS");
    const setLast30Days = () => setFilter("LAST_30_DAYS");
    const setLast12Months = () => setFilter("LAST_12_MONTHS");
    const setAllTime = () => setFilter("ALL_TIME");

    return (
        <FilterContext.Provider
            value={{
                filter,
                setLast24Hours,
                setLast7Days,
                setLast30Days,
                setLast12Months,
                setAllTime
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}

export { FilterContext, FilterProvider };