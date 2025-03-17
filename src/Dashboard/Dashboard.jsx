import { Outlet } from "react-router-dom";

function Dashboard(props) {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;