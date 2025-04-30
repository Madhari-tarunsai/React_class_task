import React from "react";
import Product from "../Product/Product";

const Products = () => {
  const products = [
    { id: 1, name: "laptop", cost: 55000 },
    { id: 2, name: "mobile", cost: 15000 },
  ];

  return (
    <div style={styles.container}>
      {products.map((item) => (
        <Product key={item.id} name={item.name} cost={item.cost} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap",
  },
};

export default Products;
