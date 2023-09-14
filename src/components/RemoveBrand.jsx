import { useEffect, useState } from "react";

const RemoveBrand = ({ brands, setBrands }) => {
  const [brandNames, setBrandNames] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleOnDelete = () => {
    if (!brands) {
      return;
    }

    const updatedBrandList = brands.filter(
      (brand) => brand.name !== selectedBrand
    );
    setBrands(updatedBrandList);
  };

  useEffect(() => {
    setBrandNames(brands.map((brand) => brand.name));
  }, [brands]);

  return (
    <div>
      <label className="orderLabel" htmlFor="brandsDropdown">
        Remove the brand:
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
      <button onClick={handleOnDelete}>Delete Brand</button>
    </div>
  );
};

export default RemoveBrand;
