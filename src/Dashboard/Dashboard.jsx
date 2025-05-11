import { Outlet } from "react-router";

import Sidebar from './../Component/DashboardComponent/Sidebar';

function Dashboard() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="flex-1 p-6">
               <Outlet/>
            </div>
        </div>
    );
}

export default Dashboard;