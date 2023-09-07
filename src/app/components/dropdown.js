import { useState } from "react";
import styles from "../page.module.css";
import Option from "./option";

export default function Dropdown(props) {
  // State Controls
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("Select a Product");

  // Retrieve all products from API
  function getProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productData = data.products;
        setProducts([...productData]);
      });
  }

  // Set selected product choice
  function handleProductChoice(e) {
    const productChoice = e.target.value;
    setSelectedProduct(productChoice);
    getSingleProduct(productChoice);
  }

  // Retrieve selected product data & send to parent
  function getSingleProduct(productChoice) {
      props.onSubmit(productChoice)
  }

  return (
    <select
      defaultValue={selectedProduct}
      className={styles.brightFont}
      onClick={getProducts}
      onChange={handleProductChoice}
    >
      <option key="" disabled>
        Select a Product
      </option>

      {products.map((product) => (
        <Option
          key={product.id}
          product={product}
          onClick={getSingleProduct}
        />
      ))}
    </select>
  );
}
