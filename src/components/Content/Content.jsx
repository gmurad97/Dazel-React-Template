import "./Content.css";
import BadgeCards from "./components/BadgeCards/BadgeCards.jsx";
import Topbar from "./components/Topbar/Topbar.jsx";
import SectionContent from "../common/SectionContent/SectionContent.jsx";
import PageHeader from "./components/PageHeader/PageHeader.jsx";
import SalesByLocation from "./components/SalesByLocation/SalesByLocation.jsx";
import Target from "./components/Target/Target.jsx";
import TopSellingProduct from "./components/TopSellingProduct/TopSellingProduct.jsx";
import RecentOrders from "./components/RecentOrders/RecentOrders.jsx";
import Statistic from "./components/Statistic/Statistic.jsx";

const Content = () => {
    return (
        <section className="content">
            <section className="stab1__section">
                <Topbar />
            </section>

            <section className="stab2__section">
                <PageHeader />
            </section>

            <section className="stab3__section">
                <BadgeCards />
            </section>

            <section className="stab4__section">
                <div className="stab4_1__section">
                    <Target />
                </div>
                <div className="stab4_2__section">
                    <Statistic />
                </div>
            </section>


            <section className="stab5__section">
                <div className="stab5_1__section">
                    <TopSellingProduct />
                </div>
                <div className="stab5_2__section">
                    <SalesByLocation />
                </div>
            </section>

            <section className="stab6__section">
                <RecentOrders />
            </section>
            <SectionContent>
                <Statistic />
            </SectionContent>

            {/*             <SectionContent>
                <Statistic />
            </SectionContent> */}
            {/* <SectionContent>
                <RecentOrders />
            </SectionContent> */}
            {/* <SectionContent>
                <Topbar />
            </SectionContent>
            <SectionContent>
                <PageHeader />
            </SectionContent>
            <SectionContent>
                <BadgeCards />
            </SectionContent>

                        <SectionContent>
                <SalesByLocation />
            </SectionContent>

            <SectionContent>
                <Target />
            </SectionContent> */}
        </section>
    );
}

export default Content;