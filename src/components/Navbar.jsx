import React from 'react'
import {NavLink } from 'react-router-dom'
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});
const Navbar = () => {
  return (
    <>
    <div className='flex flex-col  items-center'>
    <nav style={{ marginBottom: '20px' }}>
      <NavLink to={"/"}style={navLinkStyles} >Home</NavLink>{" | "}
      <NavLink to={"/about"}style={navLinkStyles} >About</NavLink>{" | "}
      <NavLink to={"/projects"}style={navLinkStyles}>Projects</NavLink>{" | "}
      <NavLink to={"/contact"}style={navLinkStyles}>Contact</NavLink>
    </nav>
    </div>
    
    
    </>
  )
}

export default Navbar