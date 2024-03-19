import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home'
import Showroom from '../../pages/Showroom/Showroom'
import Over from '../../pages/Over/Over'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/Showroom" onClick={closeMenu}>Showroom</Link>
        <Link to="/Contact" onClick={closeMenu}>Contact</Link>
        <Link to="/Over" onClick={closeMenu}>Over</Link>
      </div>
      
    </nav>
  )
}

export default Navbar