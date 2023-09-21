"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Dropdown from "./components/Dropdown"
import ProductThumbnail from "./components/ProductThumbnail";
import ProductTitle from "./components/ProductTitle";
import ProductCategory from "./components/ProductCategory";
import ProductBrand from "./components/ProductBrand";
import ProductPrice from "./components/ProductPrice";
import ProductDescription from "./components/ProductDescription";

export default function Home() {
  // State settings for Product and Selection
  const [isSelectionMade, setisSelectionMade] = useState(false);
  const [productData, setproductData] = useState({
    thumbnail: "",
    title: "",
    brand: "",
    price: "",
    category: "",
    description: "",
  });

  // Function to handle user selection
  function handleChange(productChoice) {
    // Retrieve selected product's data from dummyjson API
    fetch("https://dummyjson.com/products/" + productChoice)
      .then((res) => res.json())
      .then((data) => {
        // Set product state to match data retrieved from API
        setproductData({
          thumbnail: data.thumbnail,
          title: data.title,
          brand: data.brand,
          price: data.price,
          category: data.category,
          description: data.description,
        });
        // Set selection state to show Card and remove 'No Product Selected' message
        setisSelectionMade(true);
      });
  }

  return (
    <div>
      <Dropdown onSubmit={handleChange} />
      {isSelectionMade ? (
        <div className={styles.productDataContainer}>
          <ProductThumbnail value={productData} />
          <div className={styles.productTextContainer}>
            <ProductTitle value={productData} />
            <ProductBrand value={productData} />
            <ProductTitle value={productData}/>
            <ProductCategory value={productData}/>
            <ProductBrand value={productData}/>
            <ProductPrice value={productData}/>
            <ProductDescription value={productData}/>
          </div>
        </div>
        
      ) : (
        <div className={styles.noProduct}>
          <p>No Product Selected</p>
        </div>
      )}
    </div>
  );
}
