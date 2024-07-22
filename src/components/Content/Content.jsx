import "./Content.css";
import BadgeCards from "./components/BadgeCards/BadgeCards";
import Topbar from "./components/Topbar/Topbar";
import SectionContent from "../common/SectionContent/SectionContent.jsx";

const Content = () => {
    return (
        <section className="content">
            <SectionContent>
                <Topbar />
            </SectionContent>
            {/* <SectionContent>
                <BadgeCards />
            </SectionContent> */}
        </section>
    );
}

export default Content;