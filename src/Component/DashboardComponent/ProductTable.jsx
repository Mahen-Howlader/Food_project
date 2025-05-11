function ProductTable() {
    const products = [
    { name: "T-Shirt", stock: 120, price: "$20" },
    { name: "Hoodie", stock: 45, price: "$40" },
    { name: "Jeans", stock: 80, price: "$50" },
  ];

    return (
        <div>
              <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Top Products</h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Name</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="py-2">{p.name}</td>
              <td>{p.stock}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
}

export default ProductTable;