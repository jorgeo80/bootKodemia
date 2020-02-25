import React from 'react'
import NavbarBrand from './NabarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <NavbarBrand
        text='Home'
        to='/home'
        active
      />
      <NavbarToggler />
      <NavbarCollapse />
    </nav>
  )
}

export default Navbar
