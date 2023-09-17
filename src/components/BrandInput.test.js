import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BrandInput from "./BrandInput";

describe("BrandInput", () => {
  it("should render the component", () => {
    const { getByLabelText, getByText } = render(<BrandInput />);
    
    expect(getByLabelText("Add a brand:")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should enable the Submit button when input has value", () => {
    const { getByLabelText, getByText } = render(<BrandInput />);
    const input = getByLabelText("Add a brand:");

    expect(getByText("Submit")).toBeDisabled();

    fireEvent.change(input, { target: { value: "Test Brand" } });
    expect(getByText("Submit")).toBeEnabled();
  });

  it("should add a brand when submitted", () => {
    const brands = [];
    const setBrands = (newBrands) => {
      brands.length = 0;
      brands.push(...newBrands);
    };

    const { getByLabelText, getByText } = render(
      <BrandInput brands={brands} setBrands={setBrands} />
    );

    const input = getByLabelText("Add a brand:");
    const submitButton = getByText("Submit");

    fireEvent.change(input, { target: { value: "Test Brand" } });
    fireEvent.click(submitButton);

    expect(brands).toEqual([
      {
        name: "Test Brand",
        orders: [],
      },
    ]);
  });
});