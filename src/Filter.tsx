import React from "react";
import { DataType, ProductType } from "./App";
type Props = {
  getData: DataType | undefined;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[] | undefined>>;
};

function Filter({ getData, setProducts }: Props) {
  const filter = (category: String) => {
    if (category) {
      const filterData = getData?.products.filter(
        (item) => item.category === category
      );
      setProducts(filterData);
    } else {
      setProducts(getData?.products);
    }
  };
  return (
    <div>
      <button onClick={() => filter("")} style={ButtonStyle}>
        All
      </button>
      <button onClick={() => filter("smartphones")} style={ButtonStyle}>
        Smartphone
      </button>
      <button onClick={() => filter("laptops")} style={ButtonStyle}>
        Laptops
      </button>
    </div>
  );
}

export default Filter;

const ButtonStyle: React.CSSProperties = {
  padding: "8px",
  margin: "5px",
};
