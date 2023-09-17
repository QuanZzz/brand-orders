import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RemoveBrand from "./RemoveBrand";

describe("RemoveBrand", () => {
  it("should render the component with brand dropdown", () => {
    const brands = [
      { name: "Brand A" },
      { name: "Brand B" },
      { name: "Brand C" },
    ];

    const { getByLabelText, getByText } = render(
      <RemoveBrand brands={brands} setBrands={() => {}} />
    );

    expect(getByLabelText("Remove the brand:")).toBeInTheDocument();
    expect(getByText("Please select a brand")).toBeInTheDocument();
  });

  it("should call setBrands when deleting a brand", () => {
    const brands = [
      { name: "Brand A" },
      { name: "Brand B" },
      { name: "Brand C" },
    ];

    const setBrandsMock = jest.fn();

    const { getByText, getByTestId } = render(
      <RemoveBrand brands={brands} setBrands={setBrandsMock} />
    );

    const dropdown = getByTestId("brandsDropdown");
    fireEvent.change(dropdown, { target: { value: "Brand B" } });

    const deleteButton = getByText("Delete Brand");
    fireEvent.click(deleteButton);

    expect(setBrandsMock).toHaveBeenCalledWith([
      { name: "Brand A" },
      { name: "Brand C" },
    ]);
  });
});
