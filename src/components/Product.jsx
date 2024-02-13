import React, { useEffect, useState } from 'react'
import useShop from '../shopContext'

function Product({product}) {

  const {addToCart, removeFromCart, products} = useShop();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(()=>{
    const isCart = products.filter((pro)=> pro.id === product.id);
    if(isCart.length > 0){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
    console.log(isCart)
  },[products]);

  const handleAddToCart = () =>{
    if(isInCart){
      removeFromCart(product);
    }else{
    addToCart(product);
    }
  };

  return (
    <div className='card' style={{minHeight:"100%",
    background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${product.urlImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}}>

      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      <button
      onClick={handleAddToCart}
       className={`btn ${isInCart ? "btn-secondary" : "btn-primary"} `}>
       {isInCart ? "-" : " +"}
        </button>
    </div>
  )
}

export default Product
