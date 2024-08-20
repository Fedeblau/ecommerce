import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
    const {cart, setCart, vaciarCart} = useContext(CartContext)

  return (
    <div>
      {cart.map(e=> {
        return (
          <CartItem key={e.id} producto={e}/>
        )
      })}
      <button onClick={vaciarCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart