import "./SBLList.css";
import SBLItem from "./components/SBLItem/SBLItem.jsx";

const SBLList = ({sales_location}) => {
    return (
        <ul className="sbl__list">
            {sales_location.map((item, idx) => (
                <SBLItem item={item} key={idx} />
            ))}
        </ul>
    );
}

export default SBLList;