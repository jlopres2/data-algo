import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';

// this is an example of a server side Component, the default in react

// styles is a JavaScript object where its styles == properties
// const ProductCard = () => {
//   return (
//     <div className = {styles.card}>
//         <AddToCart/>
//     </div>
//   )
// }

const ProductCard = () => {
  return (
    <div>
        <AddToCart/>
    </div>
  )
}

export default ProductCard