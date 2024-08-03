import { useContext } from "react";
import "./BadgeCards.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import BadgeCard from "./components/BadgeCard/BadgeCard.jsx";

const BadgeCards = () => {
    const { getTranslate } = useContext(LanguageContext);

    const badgeItem = [
        {
            "title": getTranslate("badge_card_total_revenue"),
            "count": 75000,
            "price": true,
            "percentage": 10,
            "today": 150,
            "icon": "fi fi-sr-money",
            "icon_style": "linear-gradient(180deg, rgba(50,80,255,1) 0%, rgba(43,178,254,1) 100%)"
        },
        {
            "title": getTranslate("badge_card_total_order"),
            "count": 31500,
            "price": false,
            "percentage": 10,
            "today": 150,
            "icon": "fi fi-sr-shopping-cart-check",
            "icon_style": "linear-gradient(180deg, rgba(43,178,254,1) 0%, rgba(34,202,173,1) 100%)"
        },
        {
            
            "count": 11300,
            "price": false,
            "percentage": 10,
            "today": 150,
          

        },
        {
            "title": getTranslate("badge_card_total_product"),
            "count": 401,
            "price": false,
            "percentage": 0,
            "today": 0,
            "icon": "fi fi-sr-box",
            "icon_style": "linear-gradient(180deg, rgba(50,80,255,1) 0%, rgba(43,178,254,1) 100%)"
        },
    ]

    return (
        <div className="badge-cards">
            {badgeItem.map((item, idx) => (
                <BadgeCard item={item} key={idx} />
            ))}
        </div>
    );
}

export default BadgeCards;