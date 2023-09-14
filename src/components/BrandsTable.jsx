const BrandsTable = ({ brands, setBrands }) => {
  const handleOnClick = (orderDate) => {
    const updatedBrandsList = brands.map((brand) => {
      const updatedOrders = brand.orders.filter(
        (order) => order.date !== orderDate
      );
      return { ...brand, orders: updatedOrders };
    });

    setBrands(updatedBrandsList);
  };

  return (
    <table className="brandList">
      <thead>
        <tr>
          <th scope="col">Brand</th>
          <th scope="col">Orders</th>
        </tr>
      </thead>
      <tbody>
        {brands.map((brand) => (
          <tr key={brand.name}>
            <th>{brand.name}</th>
            {brand.orders.map((order) => {
              const date = new Date(order.date);

              const formattedDate = date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short"
              });

              return (
                <td className="orderList" key={order.date}>
                  <div>{formattedDate}</div>
                  <div>${order.price}</div>
                  <div>
                    <button onClick={() => handleOnClick(order.date)}>
                      Delete Order
                    </button>
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BrandsTable;
