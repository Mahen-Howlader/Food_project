function Sidebar() {
    return (
        <div>
            <aside className="w-64 bg-white shadow-md min-h-screen">
                <div className="p-6 font-bold text-xl">🛍️ E-Shop</div>
                <nav className="flex flex-col gap-4 px-6">
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Dashboard</a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Products</a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Orders</a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Customers</a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600">Settings</a>
                </nav>
            </aside>
        </div>
    );
}

export default Sidebar;