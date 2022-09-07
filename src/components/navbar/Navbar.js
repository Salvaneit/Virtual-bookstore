import React from 'react'
import { NavLink } from 'react-router-dom'
import logo_icon from '../logo_icon.svg'
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
        <img src={logo_icon} alt='logo' className='app-logo' />
        <h3>Books Bay</h3>
      </div>
      <div className='links'>
        <NavLink exact to={'/'} style={linkStyles}><strong>Home</strong></NavLink>
        <NavLink exact to={'/popular'} style={linkStyles}><strong>Popular</strong></NavLink>
        <NavLink exact to={'/contact'} style={linkStyles}><strong>Contact us</strong></NavLink>
      </div>
    </nav>
  )
}

export default Navbar