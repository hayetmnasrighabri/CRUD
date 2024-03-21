import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductsDetails() {
  const {productId} = useParams()
  const [product, setProduct]=useState({})
  useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res=>res.json())
  .then((product)=>setProduct(product))
  },[])
  return (
    <div>
      
      {product ?
      <>
       <h1> {product.title}</h1>
       <h1> {product.price}$</h1>
    </>
    : null  
    }
     
    </div>
  )
}

export default ProductsDetails
