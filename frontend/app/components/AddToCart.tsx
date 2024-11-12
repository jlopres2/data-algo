'use client';
import React from 'react'

// use client side rendering here just for the button function 

const AddToCart = () => {
  return (
    <div>
        <button className = 'btn btn-primary'onClick={() => console.log('click')}>Click ME to add to cart</button>
    </div>
  )
}

export default AddToCart