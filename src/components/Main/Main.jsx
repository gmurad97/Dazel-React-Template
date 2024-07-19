import "./Main.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";

const Main = () => {
    return (
        <main className="main">
            <Sidebar />
            <Content />
        </main>
    );
}

export default Main;