import React, { useEffect } from "react";

const BrandInput = ({ brands, setBrands }) => {
  const [brandName, setBrandName] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleOnSubmit = () => {
    if (!brands) {
      return;
    }

    setBrands([
      ...brands,
      {
        name: brandName,
        orders: []
      }
    ]);

    setBrandName("");
  };

  useEffect(() => {
    setIsDisabled(!brandName.length);
  }, [brandName]);

  return (
    <div className="brandField">
      <label className="brandLabel" htmlFor="brandInput">
        Add a brand:
      </label>
      <input
        id="brandInput"
        className="brandInput"
        type="text"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
      />
      <button disabled={isDisabled} onClick={handleOnSubmit}>
        Submit
      </button>
    </div>
  );
};

export default BrandInput;
