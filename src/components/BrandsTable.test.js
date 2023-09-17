import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BrandsTable from "./BrandsTable";
import { brandsList } from "../utils/brandsList";

describe("BrandsTable", () => {
  it("should render the component with brand data", () => {
    const brands = [
      {
        name: "Brand A",
        orders: [
          {
            date: "2023-09-17T10:00:00Z",
            price: 100,
          },
          {
            date: "2023-09-18T15:30:00Z",
            price: 150,
          },
        ],
      },
      {
        name: "Brand B",
        orders: [
          {
            date: "2023-09-17T14:45:00Z",
            price: 80,
          },
        ],
      },
    ];

    const { getByText } = render(
      <BrandsTable brands={brands} setBrands={() => {}} />
    );

    expect(getByText("Brand A")).toBeInTheDocument();
    expect(getByText("Brand B")).toBeInTheDocument();
    expect(getByText("Sep 17, 2023, 06:00:00 AM EDT")).toBeInTheDocument();
    expect(getByText("$100")).toBeInTheDocument();
  });
});
