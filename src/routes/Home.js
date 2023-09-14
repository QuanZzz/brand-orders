import { useState } from "react";
import { brandsList } from "../utils/brandsList";
import BrandInput from "../components/BrandInput";
import OrderInput from "../components/OrderInput";
import BrandsTable from "../components/BrandsTable";
import RemoveBrand from "../components/RemoveBrand";

export default function App() {
  const [brands, setBrands] = useState(brandsList);

  return (
    <div className="App">
      <h1>Brand Orders</h1>

      {!!brands.length && <BrandsTable brands={brands} setBrands={setBrands} />}

      <div className="buttonsGroup">
        <BrandInput brands={brands} setBrands={setBrands} />
        {!!brands.length && (
          <OrderInput brands={brands} setBrands={setBrands} />
        )}
        {!!brands.length && (
          <RemoveBrand brands={brands} setBrands={setBrands} />
        )}
      </div>
    </div>
  );
}
