import React from 'react'
import Logo from './LogoCropped.png'
import './Navbar.css'
import { Nav } from 'react-bootstrap';
function Navbar() {
  return (
  <>
  <div className="my-navbar">
    <ul>
        <li>
            <img src={Logo}></img>
            <Nav.Link href="/">Home</Nav.Link>
          
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#company">Company</Nav.Link>
        </li>
    </ul>
  </div>
  </>
  )
}

export default Navbar