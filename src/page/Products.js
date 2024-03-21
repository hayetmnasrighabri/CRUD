import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './product.css'
function Products() {
  const[products, setProducts]=useState([])
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>setProducts(data))
},[])
const deleteProduct=(productId)=>{
  //console.log(productId)
  fetch(`https://fakestoreapi.com/products/${productId}`,{
    method: "DELETE"
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
  })
}
  return (
    <div>
      <h1>Products</h1>
      <Link to={"/products/add"} className='btn btn-success'>Add new products</Link>
      <table className="table mt-5 products-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Price</th>
      <th>operation</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product)=>{
      return(
        <tr  key={product.id}>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.description.slice(0,40)}...</td>
        <td>{product.price}</td>
        <td> 
          <button className='btn btn-danger btn-sm' onClick={()=>deleteProduct(product.id)}>Delete</button>
          <Link to={`/products/${product.id}`} className='btn btn-info btn-sm'>View</Link>
          <button className='btn btn-primary btn-sm'>Edit</button>
        </td>
        </tr>
      )
    })}
    
    </tbody>
</table>
    </div>
  )
}

export default Products
