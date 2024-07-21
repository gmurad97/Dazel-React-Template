import Sidebar from "../components/Sidebar/Sidebar";

import Content from "../components/Content/Content";
import SectionRow from "../components/common/SectionRow/SectionRow";
const DashboardPage = () => {
    return (
        <div className="dashboard">
            <SectionRow>
                <Sidebar />
                <Content />
            </SectionRow>

        </div>
    );
}

export default DashboardPage;