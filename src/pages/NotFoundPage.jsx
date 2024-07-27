import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import BlockContent from "../components/common/BlockContent/BlockContent.jsx";
import Error from "../components/Error/Error.jsx";

const NotFoundPage = () => {
    return (
        <SectionRow>
            <Sidebar />
            <SectionContent>
                <BlockContent>
                    <Error errorCode={404} />
                </BlockContent>
            </SectionContent>
        </SectionRow>
    );
}

export default NotFoundPage;