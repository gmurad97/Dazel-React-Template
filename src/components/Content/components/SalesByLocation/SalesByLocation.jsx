import "./SalesByLocation.css";
import SBLHeader from "./components/SBLHeader/SBLHeader.jsx";
import SBLList from "./components/SBLList/SBLList.jsx";
import FlagUK from "./assets/img/flag_uk.png";
import FlagSpain from "./assets/img/flag_spain.png";
import FlagIndonesia from "./assets/img/flag_indonesia.png";
import FlagFrance from "./assets/img/flag_france.png";
import FlagGermany from "./assets/img/flag_germany.png";
import FlagUAE from "./assets/img/flag_uae.png";
import FlagTurkey from "./assets/img/flag_turkey.png";
import FlagUSA from "./assets/img/flag_usa.png";
import FlagJapan from "./assets/img/flag_japan.png";

const sales_location = [
    {
        "country": "United Kingdom",
        "img": FlagUK,
        "sales": 340,
        "revenue": 17678,
        "percentage": 12
    },
    {
        "country": "Spain",
        "img": FlagSpain,
        "sales": 100,
        "revenue": 5500,
        "percentage": -5
    },
    {
        "country": "Indonesia",
        "img": FlagIndonesia,
        "sales": 50,
        "revenue": 2500,
        "percentage": 0
    },
    {
        "country": "France",
        "img": FlagFrance,
        "sales": 147,
        "revenue": 7456,
        "percentage": 19
    },
    {
        "country": "Germany",
        "img": FlagGermany,
        "sales": 540,
        "revenue": 24189,
        "percentage": -25
    },
    {
        "country": "United Arab Emirates",
        "img": FlagUAE,
        "sales": 345,
        "revenue": 15700,
        "percentage": 11
    },
    {
        "country": "Turkey",
        "img": FlagTurkey,
        "sales": 560,
        "revenue": 24700,
        "percentage": -12
    },
    {
        "country": "United States",
        "img": FlagUSA,
        "sales": 48,
        "revenue": 2000,
        "percentage": 7
    },
    {
        "country": "Japan",
        "img": FlagJapan,
        "sales": 23,
        "revenue": 1500,
        "percentage": 0
    },
];

const SalesByLocation = () => {
    return (
        <div className="sales-by-location">
            <SBLHeader title="Sales by Location" description="Sales performance by location" />
            <SBLList sales_location={sales_location} />
        </div>
    );
}

export default SalesByLocation;