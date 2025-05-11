import React from 'react';

function DashboardCards() {
      const stats = [
    { label: "Total Sales", value: "$12,450" },
    { label: "Orders", value: "340" },
    { label: "Customers", value: "120" },
    { label: "Revenue", value: "$8,300" },
  ];
    return (
        <div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">{stat.label}</h2>
          <p className="text-xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
        </div>
    );
}

export default DashboardCards;