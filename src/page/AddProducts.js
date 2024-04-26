import React, { useState } from 'react'

function AddProducts() {
  const [title, setTitle]=useState({})
  const [description, setDescription]=useState()
  const [price, setPrice]=useState(0)


  const handleSubmit=(e)=>{
    e.preventDefault()
    //console.log("title:", title)
    //console.log("description:", description)
    //console.log("price:", price)

    fetch(`http://localhost:9000/products`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify
      ({
        title,
         description,
          price
        }),
    })
    .then((res)=>res.json())
    .then(data=>console.log(data))
    }
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="ProductTitle" className="form-label">
        Title
      </label>
      <input
       type="text"
        className="form-control"
        placeholder='Product Title'
         id="ProductTitle"
        aria-describedby="ProductTitle"
        onChange={(e)=>setTitle(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="ProductDescription" className="form-label">
        Description
      </label>
      <input
       type="text"
        className="form-control"
        placeholder='Product Description'
         id="ProductDescription"
        aria-describedby="Product Description"
        onChange={(e)=>setDescription(e.target.value)}/>

    </div>
    <div className="mb-3">
      <label htmlFor="ProductPrice" className="form-label">
        Price
      </label>
      <input 
      type="number" 
      placeholder='Product Price'
      className="form-control"
       id="ProductPrice"
       onChange={(e)=>setPrice(e.target.value)}/>
    </div><br/>
    <button type="submit" className="btn btn-primary">
      Add Product
      </button>
  </form>
  )
}

export default AddProducts
