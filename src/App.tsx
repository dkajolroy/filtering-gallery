import { useState } from "react";
import Filter from "./Filter";

type DataType = {
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

function App() {
  const [data, setData] = useState<DataType[]>([]);

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Welcome</h2>
      <Filter />
    </div>
  );
}

export default App;
