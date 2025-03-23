import React from 'react'
import { Link } from 'react-router-dom'
import CartBtn from '../Button/CartBtn'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
            <button data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' type= 'button' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current='page' to='/'>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" aria-current='page' to='../Product/Product.jsx'>Product</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" aria-current='page' to='../about/About.jsx'>About</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" aria-current='page' to='../contact/contact.jsx'>Contact Us</Link>
                    </li>
                </ul>
                <CartBtn/>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
