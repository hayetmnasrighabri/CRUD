import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../page/Products'

function Sidebar() {
  return (
    <>
    <ul className='list-unstyled'>
    <li>
      <Link to="Products">get All Products</Link>
      </li>
      <li>
      <Link to="categories">get All categories</Link>
      </li>
    </ul>
    </>
  )
}

export default Sidebar
