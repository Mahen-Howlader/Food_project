function RecentOrders() {
     const orders = [
    { customer: "John", total: "$120", date: "2025-05-10" },
    { customer: "Alice", total: "$80", date: "2025-05-09" },
    { customer: "Bob", total: "$200", date: "2025-05-08" },
  ];
    return (
        <div>
                <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
      <ul className="space-y-2">
        {orders.map((order, idx) => (
          <li key={idx} className="flex justify-between border-b py-2 text-sm">
            <span>{order.customer}</span>
            <span>{order.total}</span>
            <span>{order.date}</span>
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
}

export default RecentOrders;