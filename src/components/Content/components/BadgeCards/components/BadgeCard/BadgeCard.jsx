import "./BadgeCard.css";

const BadgeCard = ({ item: { title, count, price, percentage, today, icon, icon_style } }) => {
    return (
        <div className="badge-card">
            <div className="badge-card__container">
                <div className="badge-card__title-count">
                    <h1 className="badge-card__title">{title}</h1>
                    <h2 className="badge-card__count">
                        {price ? "$" + count.toLocaleString("en-US") : count.toLocaleString("en-US")}
                    </h2>
                </div>
                <div className="badge-card__icon" style={{ backgroundImage: icon_style }}>
                    <i className={icon}></i>
                </div>
            </div>
            <div className="badge-card__container">
                <span className={`badge-card__percentage ${percentage >= 0 ? "badge-card__percentage--plus" : "badge-card__percentage--minus"}`}>
                    {percentage >= 0 ? (
                        <>
                            +{percentage.toLocaleString("en-US")}%
                            <i className="fi fi-sr-caret-up"></i>
                        </>
                    ) : (
                        <>
                            {percentage.toLocaleString("en-US")}%
                            <i className="fi fi-sr-caret-down"></i>
                        </>
                    )}
                </span>
                <div className="badge-card__today">
                    {today >= 0 ? (
                        "+" + today.toLocaleString("en-US") + " today"
                    ) : (
                        today.toLocaleString("en-US") + " today"
                    )}
                </div>
            </div>
        </div>
    );
}

export default BadgeCard;