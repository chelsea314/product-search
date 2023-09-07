'use client'
import {useState} from "react";
import styles from './page.module.css'
import Dropdown from './components/dropdown';
import ProductImg from "./components/productImg";

export default function Home() {

function handleChange(productChoice) {
  console.log(productChoice);
  fetch("https://dummyjson.com/products/" + productChoice)
      .then((res) => res.json())
      .then(console.log);
}

  return (
    <main>
      <Dropdown onSubmit={handleChange}/>
      
      <ProductImg 
        
      />
    </main>
  )
}
