import { motion } from "framer-motion";
import { ProductType } from "./App";
function Product({ item }: { item: ProductType }) {
  return (
    <motion.div layout>
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
    </motion.div>
  );
}

export default Product;
