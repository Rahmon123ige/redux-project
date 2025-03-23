import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CartBtn() {
    const state = useSelector((state) => state.addItems)
  return (
    <div>
      <Link to='../Cart/Cart.jsx' className="btn btn-outline-primary ms-2">
      <span className='fa fa-shopping-cart me-1'></span>Cart ({state.length})
      </Link>
    </div>
  )
}

export default CartBtn
