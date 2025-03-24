import { Outlet } from "react-router-dom";
import Dashboardslider from "./DashboardSlider/Dashboardslider";

function Dashboard(props) {
    return (
        <div className="max-w-screen-2xl mx-auto flex flex-col  flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
            <Dashboardslider></Dashboardslider>
            <div className="max-w-screen-2xl mx-auto ml-14  md:ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;