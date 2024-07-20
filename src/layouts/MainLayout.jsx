import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <main className="main">
            <Outlet />
        </main>
/*         <div className="main">

            //Sidebar
            //--header
            //--main
            //--footer

            //Content(changeble)
            //--sectionable
            <Outlet />
        </div> */
    );
}

export default MainLayout;