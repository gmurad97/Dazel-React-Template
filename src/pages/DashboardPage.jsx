import MainRow from "../components/common/MainRow/MainRow.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Section from "../components/common/Section/Section.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

const Dashboard = () => {
    return (
        <MainRow>
            <Sidebar />
            <Section>
                <Navbar />
            </Section>
        </MainRow>
    );
}

export default Dashboard;