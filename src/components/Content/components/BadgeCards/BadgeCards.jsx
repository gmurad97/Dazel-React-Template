import "./BadgeCards.css";
import BadgeCard from "./components/BadgeCard/BadgeCard.jsx";

const badgeItem = [
    {
        "title": "Total Revenue",
        "count": 75000,
        "price": true,
        "percentage": 10,
        "today": 150,
        "icon": "fi fi-sr-money",
        "icon_style": "linear-gradient(180deg, rgba(50,80,255,1) 0%, rgba(43,178,254,1) 100%)"
    },
    {
        "title": "Total Order",
        "count": 31500,
        "price": false,
        "percentage": 10,
        "today": 150,
        "icon": "fi fi-sr-shopping-cart-check",
        "icon_style": "linear-gradient(180deg, rgba(43,178,254,1) 0%, rgba(34,202,173,1) 100%)"
    },
    {
        "title": "Total Customer",
        "count": 11300,
        "price": false,
        "percentage": 10,
        "today": 150,
        "icon": "fi fi-sr-user-add",
        "icon_style": "linear-gradient(180deg, rgba(235,61,77,1) 0%, rgba(251,163,124,1) 100%)"
    },
    {
        "title": "Total Product",
        "count": 401,
        "price": false,
        "percentage": 0,
        "today": 0,
        "icon": "fi fi-sr-box",
        "icon_style": "linear-gradient(180deg, rgba(50,80,255,1) 0%, rgba(43,178,254,1) 100%)"
    },
]

const BadgeCards = () => {
    return (
        <div className="badge-cards">
            {badgeItem.map((item, idx) => (
                <BadgeCard item={item} key={idx} />
            ))}
        </div>
    );
}

export default BadgeCards;