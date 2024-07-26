import "./SBLItem.css";

const SBLItem = ({ item: { country, img, sales, revenue, percentage } }) => {
    return (
        <li className="sbl__item">
            <div className="sbl__flag-sales">
                <div className="sbl__flag">
                    <img src={img} className="sbl__flag-img" alt="Spain Flag" />
                </div>
                <div className="sbl__location-sales">
                    <span className="sbl__location">{country}</span>
                    <span className="sbl__sales">{sales} Sales</span>
                </div>
            </div>
            <div className="sbl__details">
                <span className="sbl__amount">${revenue.toLocaleString("en-US")}</span>
                <span className={`sbl__performance ${percentage > 0 ? 'sbl__performance--plus' : percentage < 0 ? 'sbl__performance--minus' : 'sbl__performance--zero'}`}>
                    {percentage > 0 ? "+" + percentage + "%" : percentage + "%"}
                </span>
            </div>
        </li>
    );
}

export default SBLItem;