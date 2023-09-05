import { useState } from "react";
import styles from "../page.module.css";
import Option from "./option";

export default function Dropdown() {
  // State Controls
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("Select a Product");

  // Retrieve all products from API
  function getProducts() {
    let productArr = [];
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productData = data.products;
        productData.forEach((product) => {
          productArr.push(productData);
        });
        setProducts(...productArr);
      });
  }

  // Set selected product choice
  function handleProductChoice(e) {
    const productChoice = e.target.value;
    setSelectedProduct(productChoice);
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
          className={styles.brightFont}
          key={product.id}
          product={product}
          setProducts={setProducts}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      ))}
    </select>
  );
}
