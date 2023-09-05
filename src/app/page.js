'use client'
import {useState} from "react";
import Image from 'next/image'
import styles from './page.module.css'
import Dropdown from './components/dropdown';

export default function Home() {
  const [products, setProducts] = useState([]);

function getProducts() {
    setDropDownOpen(true);
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        const productData = data.products;
        productData.forEach((product) => {
            console.log(product.title);
        })
        setProducts(...productData);
    });
}
  return (
    <main>
      <Dropdown 
        products={products} 
        setProducts={setProducts}
        onClick={getProducts}
      />
    </main>
  )
}
