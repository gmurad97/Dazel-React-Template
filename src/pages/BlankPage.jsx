import Sidebar from "../components/Sidebar/Sidebar";

import Content from "../components/Content/Content";
import SectionRow from "../components/common/SectionRow/SectionRow";
const BlankPage = () => {
    return (
        <div className="blank">
            <SectionRow>
                <Sidebar />
                <Content />
            </SectionRow>

        </div>
    );
}

export default BlankPage;