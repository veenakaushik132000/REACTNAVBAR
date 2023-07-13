import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className='container'>
        <div className='content'>
            <p><Link className="nav-link" to="/First">first</Link></p>
            <p><Link className="nav-link" to="/Second">second</Link></p>      
            <p><Link className="nav-link" to="/Third">third</Link></p>
        </div>
        </nav>
    </>
  )
}

export default Navbar