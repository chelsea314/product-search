import { useState } from "react";
import styles from "../page.module.css";
import Option from "./option";

export default function dropdown({ products, setProducts }) {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  // const [products, setProducts] = useState([]);

  function getProducts() {
    let productArr = [];
    setDropDownOpen(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        const productData = data.products;
        productData.forEach((product) => {
          console.log(product.title);
          productArr.push(productData);
        });
        console.log(productArr);
        setProducts(...productArr);
      });
  }

  console.log(products);

  return (
    <>
      <select 
        className={styles.brightFont} 
        onClick={getProducts}>
        
        <option value="" disabled selected>
          Select a Product
        </option>

        {products.map((product) => (
          <Option 
            className={styles.brightFont} 
            key={product.key} 
            product={product}
            setProducts={setProducts}
            products={products} 
            />
        ))}

      </select>
    </>
  );
}
