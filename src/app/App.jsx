import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import BlankPage from "../pages/BlankPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="blank" element={<BlankPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route />
            </Route>
        </Routes>
    );
}

export default App;