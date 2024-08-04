import { useContext } from "react";
import "./BadgeCards.css";
import { FilterContext } from "../../../../context/FilterContext.jsx";
import BadgeCard from "./components/BadgeCard/BadgeCard.jsx";

const BadgeCards = () => {
    const { getFilter, getBadges } = useContext(FilterContext);

    return (
        <div className="badge-cards">
            {getBadges.map((item, idx) => (
                <BadgeCard item={item} filter={getFilter} key={idx} />
            ))}
        </div>
    );
}

export default BadgeCards;