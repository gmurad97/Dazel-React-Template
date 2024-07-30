import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import BlankPage from "../pages/BlankPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

const App = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route index element={isAuth ? <DashboardPage /> : <Navigate to="/login" replace />} />
                <Route path="dashboard" element={isAuth ? <DashboardPage /> : <Navigate to="/login" replace />} />
                <Route path="blank" element={isAuth ? <BlankPage /> : <Navigate to="/login" replace />} />
                <Route path="*" element={isAuth ? <NotFoundPage /> : <Navigate to="/login" replace />} />
                <Route />
            </Route>
        </Routes>
    );
}

export default App;