import "./Content.css";
import BadgeCards from "./components/BadgeCards/BadgeCards.jsx";
import Topbar from "./components/Topbar/Topbar.jsx";
import SectionContent from "../common/SectionContent/SectionContent.jsx";
import PageHeader from "./components/PageHeader/PageHeader.jsx";
import SalesByLocation from "./components/SalesByLocation/SalesByLocation.jsx";

const Content = () => {
    return (
        <section className="content">
{/*             <SectionContent>
                <Topbar />
            </SectionContent>
            <SectionContent>
                <PageHeader />
            </SectionContent>
            <SectionContent>
                <BadgeCards />
            </SectionContent> */}

            <SectionContent>
                <SalesByLocation />
            </SectionContent>
        </section>
    );
}

export default Content;