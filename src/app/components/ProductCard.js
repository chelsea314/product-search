import React from 'react';
import ProductThumbnail from './ProductThumbnail';
import ProductBrand from './ProductBrand';
import ProductCategory from './ProductCategory';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle'

export default function productCard({value}) {
  return (
    <div >
        <ProductThumbnail value={value}/>
        <ProductTitle value={value}/>
        <ProductBrand value={value}/>
        <ProductCategory value={value}/>
        <ProductDescription value={value}/>
        <ProductPrice value={value}/>
    </div>
  )
}
