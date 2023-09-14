import { useEffect, useState } from "react";

const OrderInput = ({ brands, setBrands }) => {
  const [orderPrice, setOrderPrice] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [brandNames, setBrandsNames] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleOnSubmit = () => {
    const brandIndex = brands.findIndex(
      (brand) => brand.name === selectedBrand
    );

    if (brandIndex !== -1) {
      const updatedBrandList = [...brands];
      updatedBrandList[brandIndex].orders.push({
        date: new Date().toISOString(),
        price: orderPrice
      });
      setBrands(updatedBrandList);
    }

    setOrderPrice("");
  };

  useEffect(() => {
    setBrandsNames(brands.map((brand) => brand.name));
  }, [brands]);

  useEffect(() => {
    setIsDisabled(!orderPrice);
  }, [orderPrice]);

  return (
    <div className="orderOperationRow">
      <label className="orderLabel" htmlFor="brandsDropdown">
        Select the brand:
      </label>
      <select
        name="brands"
        className="brandsDropdown"
        id="brandsDropdown"
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="">Please select a brand</option>
        {brandNames?.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <label className="orderLabel" htmlFor="brandsDropdown">
        Price:
      </label>
      <input
        className="priceInput"
        type="number"
        value={orderPrice}
        onChange={(e) => setOrderPrice(parseInt(e.target.value, 10))}
      />
      <button disabled={isDisabled} onClick={handleOnSubmit}>
        Submit
      </button>
    </div>
  );
};

export default OrderInput;
