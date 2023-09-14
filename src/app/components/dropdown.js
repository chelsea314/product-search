import { useState } from "react";
import styles from "../page.module.css";

export default function Dropdown(props) {
  // State Controls
  const [products, setProducts] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Select a Product");

  // Show and hide dropdown choices
  function handleDropdown() {
    setDropdownVisible(!dropdownVisible);
    if (!dropdownVisible) {
      getProducts();
    }
  }

  // Retrieve all products from API
  function getProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const productData = data.products;
        setProducts([...productData]);
      });
  }

  // Set selected product choice
  function handleProductChoice(e) {
    setDropdownVisible(false);
    const productChoice = e.target.value;
    console.log(e.target.value);
    setSelectedProduct(productChoice);
    getSingleProduct(productChoice);
  }

  // Retrieve selected product data & send to parent
  function getSingleProduct(productChoice) {
    props.onSubmit(productChoice);
  }

  return (
    <div className={styles.dropdown}>
      <button
        defaultValue={selectedProduct}
        className={styles.dropdownBtn}
        onClick={handleDropdown}
      >
        <span>Select a Product</span>
        <span className={styles.arrow}></span>
      </button>

      {dropdownVisible ? (
        <ul className={styles.dropdownContent}>
          {products.map((product) => (
            <li
              key={product.id}
              value={product.id}
              product={product}
              onClick={handleProductChoice}
            >
              {product.title}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
