import { useContext } from "react";
import "./SalesByLocation.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import SBLHeader from "./components/SBLHeader/SBLHeader.jsx";
import SBLList from "./components/SBLList/SBLList.jsx";
/* import FlagUK from "./assets/img/flag_uk.png";
import FlagSpain from "./assets/img/flag_spain.png";
import FlagIndonesia from "./assets/img/flag_indonesia.png";
import FlagFrance from "./assets/img/flag_france.png";
import FlagGermany from "./assets/img/flag_germany.png";
import FlagUAE from "./assets/img/flag_uae.png";
import FlagTurkey from "./assets/img/flag_turkey.png";
import FlagUSA from "./assets/img/flag_usa.png";
import FlagJapan from "./assets/img/flag_japan.png"; */

const SalesByLocation = () => {
    const { getTranslate } = useContext(LanguageContext);

    const sales_location = [
        {
            "country": getTranslate("sales_location_uk"),
/*             "img": FlagUK, */
            "sales": 340,
            "revenue": 17678,
            "percentage": 12
        },
        {
            "country": getTranslate("sales_location_spain"),
/*             "img": FlagSpain, */
            "sales": 100,
            "revenue": 5500,
            "percentage": -5
        },
        {
            "country": getTranslate("sales_location_indonesia"),
/*             "img": FlagIndonesia, */
            "sales": 50,
            "revenue": 2500,
            "percentage": 0
        },
        {
            "country": getTranslate("sales_location_france"),
/*             "img": FlagFrance, */
            "sales": 147,
            "revenue": 7456,
            "percentage": 19
        },
        {
            "country": getTranslate("sales_location_germany"),
/*             "img": FlagGermany, */
            "sales": 540,
            "revenue": 24189,
            "percentage": -25
        },
        {
            "country": getTranslate("sales_location_uae"),
/*             "img": FlagUAE, */
            "sales": 345,
            "revenue": 15700,
            "percentage": 11
        },
        {
            "country": getTranslate("sales_location_turkey"),
/*             "img": FlagTurkey, */
            "sales": 560,
            "revenue": 24700,
            "percentage": -12
        },
        {
            "country": getTranslate("sales_location_usa"),
/*             "img": FlagUSA, */
            "sales": 48,
            "revenue": 2000,
            "percentage": 7
        },
        {
            "country": getTranslate("sales_location_japan"),
/*             "img": FlagJapan, */
            "sales": 23,
            "revenue": 1500,
            "percentage": 0
        },
    ];

    return (
        <div className="sales-by-location">
            <SBLHeader title={getTranslate("sbl_header_title")} description={getTranslate("sbl_header_description")} />
            <SBLList sales_location={sales_location} />
        </div>
    );
}

export default SalesByLocation;