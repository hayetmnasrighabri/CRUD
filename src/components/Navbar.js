import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../page/Home'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-auto mb-2 mb-lg-0">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
            </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
