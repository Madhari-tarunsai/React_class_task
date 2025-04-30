import React from "react";

const Product = ({ name, cost }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Cost: ₹{cost}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    width: "200px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
};

export default Product;
