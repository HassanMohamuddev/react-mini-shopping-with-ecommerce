import React from 'react'
import "../style.css"
import { Link } from 'react-router-dom'
import useShop from '../shopContext'

function Header() {

  const {products} =  useShop()
  return (
    <header className="menu" >

        <Link className='Logo' to="/">BirFood</Link>
        <div className='Links'>
        <Link className='a' to="/">Home</Link>
        <Link className='a' to="/about">About</Link>
        <Link className='a' to="/contact">contact</Link>
        <Link className='a' to="/cart">cart</Link>
        </div>
        <Link className='a' to="/cart">
            <span className='cart'>{products.length}</span>
        </Link>
        
      
    </header>
  )
}

export default Header
