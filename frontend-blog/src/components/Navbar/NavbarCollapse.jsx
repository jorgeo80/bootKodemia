import React from 'react'

import NavbarNav from './NavbarNav'
import NavbarNavSearch from './NavbarNavSearch'

function NavbarCollapse () {
  return (
    <div
      id='navbarsExampleDefault'
      className='collapse navbar-collapse'
    >
      <NavbarNav />
      <NavbarNavSearch />
    </div>
  )
}

export default NavbarCollapse
