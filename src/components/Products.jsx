import React from 'react'
import { products } from '../data'
import Product from './Product'

function Products() {
  return (
    <div className='grid'>
    {
    products.map((product) =>(

            <Product key={product.id} product={product} />
       
    ))}
    </div>
  );
};

export default Products
