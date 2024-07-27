import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import BlockContent from "../components/common/BlockContent/BlockContent.jsx";

const BlankPage = () => {
    return (
        <SectionRow>
            <Sidebar />
            <SectionContent>
                <BlockContent>
                    This is a blank page
                </BlockContent>
            </SectionContent>
        </SectionRow>
    );
}

export default BlankPage;