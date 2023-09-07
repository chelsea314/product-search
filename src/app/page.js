"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Dropdown from "./components/dropdown"
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [isSelectionMade, setisSelectionMade] = useState(false);
  const [productData, setproductData] = useState({
    thumbnail: "",
    title: "",
    brand: "",
    price: "",
    category: "",
    description: "",
  });

  function handleChange(productChoice) {
    console.log(productChoice);
    fetch("https://dummyjson.com/products/" + productChoice)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproductData({
          thumbnail: data.thumbnail,
          title: data.title,
          brand: data.brand,
          price: data.price,
          category: data.category,
          description: data.description,
        });
        setisSelectionMade(true);
      });
  }

  return (
    <main>
      <Dropdown onSubmit={handleChange} />
      {isSelectionMade ? (
        <ProductCard value={productData} />
      ) : (
        <p className={styles.brightFont}>No Product Selected</p>
      )}
    </main>
  );
}
