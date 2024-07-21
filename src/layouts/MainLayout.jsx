import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return(
        <main className="b">
            <Outlet />
        </main>
    );
}

export default MainLayout;