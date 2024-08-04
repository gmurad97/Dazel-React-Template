import { useState, createContext, useEffect } from "react";
import DazelApi from "../api/DazelApi";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState("ALL_TIME");
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        DazelApi.getStatsData().then(stats => setStatistics(stats));
    }, []);

    const setAllTime = () => setFilter("ALL_TIME");
    const setLast12Months = () => setFilter("12_MONTHS");
    const setLast30Days = () => setFilter("30_DAYS");
    const setLast7Days = () => setFilter("7_DAYS");
    const setLast24Hour = () => setFilter("24_HOUR");

    const getFilter = filter.toLowerCase();
    const getBadges = statistics?.badges ?? [];

    return (
        <FilterContext.Provider
            value={{
                getBadges,
                getFilter,
                setLast24Hour,
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