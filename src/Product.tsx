import { ProductType } from "./App";
function Product({ item }: { item: ProductType }) {
  return (
    <div
      style={{
        width: "33.33%",
      }}
    >
      <div
        style={{
          margin: "10px",
        }}
      >
        <img
          style={{
            height: "200px",
            width: "100%",
            borderRadius: "10px",
            objectFit: "contain",
          }}
          src={item.thumbnail}
          alt="item"
        />
      </div>
    </div>
  );
}

export default Product;
