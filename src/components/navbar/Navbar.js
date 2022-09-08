import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 15px 15px",
    textDecoration: "none",
    color: "white",
  };
  return (
    <nav>
      <div className='nav-items'>
        <img src='https://www.iconpacks.net/icons/2/free-book-icon-4986-thumb.png' alt='logo' className='app-logo' />
        <h3>Books Bay</h3>
      </div>
      <div className='links'>
        <NavLink exact to={'/'} style={linkStyles}><strong className='nav-link'>Home</strong></NavLink>
        <NavLink exact to={'/popular'} style={linkStyles}><strong className='nav-link'>Popular</strong></NavLink>
        <NavLink exact to={'/bibliography'} style={linkStyles}><strong className='nav-link'>Bibliography</strong></NavLink>
        <NavLink exact to={'/contact'} style={linkStyles}><strong className='nav-link'>Contact us</strong></NavLink>
      </div>
    </nav>
  )
}

export default Navbar