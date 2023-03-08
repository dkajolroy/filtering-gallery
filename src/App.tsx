import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
export type DataType = {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
};

function App() {
  const [products, setProducts] = useState<ProductType[]>();
  const [getData, setGetData] = useState<DataType>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("https://dummyjson.com/products");
      setGetData(data);
    };
    getData();
  }, []);
  useEffect(() => {
    if (getData) {
      setProducts(getData.products);
    }
  }, [getData]);

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Welcome</h2>
      <Filter getData={getData} setProducts={setProducts} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products?.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
