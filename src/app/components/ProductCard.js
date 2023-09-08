import React from 'react';
import styles from '../page.module.css'
import ProductThumbnail from './ProductThumbnail';
import ProductBrand from './ProductBrand';
import ProductCategory from './ProductCategory';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle'

export default function productCard({value}) {
  return (
    <div style={{width:'600', height:'151px', paddingTop:'50px', alignContent:'center' }}>
        <ProductThumbnail value={value} style={{display:'inline-block'}}/>
      
      <section style={{ display:'inline-block', width: '286px', height: '151px', padding: '5px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', height:'20px'}}>
          <ProductTitle value={value}/>
          <ProductCategory  value={value}/>
        </div>
        <div>
          <ProductBrand style={{height:'20px'}} value={value}/>
          <ProductPrice style={{height:'20px', padding:'0'}} value={value}/>
          <ProductDescription style={{height:'20px'}} value={value}/>
        </div>          
      </section>
      
    </div>
  )
}
