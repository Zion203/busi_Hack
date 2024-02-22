import React from 'react'
import NavBar from './NavBar'
import items from '../../items';
import shirt from '../assets/shirt.png'

function CartDis() {
    const cartItems = items.filter(item => item.is_cart);
  return (
    <>
    <NavBar></NavBar>
    <div>
        <span>Homw</span>
        <span>&gt;</span>
        <span>Cart</span>
    </div>
    <div>
        <h1>Your Cart</h1>
        <div>
        {
            cartItems.map(item => (
                <div>
                    <img src={shirt} alt="" />
                    <p>{item.shirt_name}</p>
                    <p>{item.brand_name}</p>
                </div>
            ))
        }
        </div>
        
    </div>
    </>
  )
}

export default CartDis