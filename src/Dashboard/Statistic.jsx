import DashboardCards from "../Component/DashboardComponent/DashboardCards";
import ProductTable from "../Component/DashboardComponent/ProductTable";
import RecentOrders from "../Component/DashboardComponent/RecentOrders";
function Statistic(props) {
    return (
        <div>
             <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
                <DashboardCards />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <ProductTable />
                    <RecentOrders />
                </div>
        </div>
    );
}

export default Statistic;