import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductsDetails() {
  const {productId} = useParams()
  const [product, setProduct]=useState({})
  useEffect(()=>{
  fetch(`http://localhost:9000/products/${productId}`)
  .then((res)=>res.json())
  .then((data)=>{ console.log(data);
         setProduct(data);})
  },[])
  return (
    <div>
      <h1>ProductsDetails</h1>
      {product &&
       <h2>{product.title}</h2>
      }
    </div>
  )
}

export default ProductsDetails
