import React from 'react'

function NavbarBrand (props) {
  return (
    <a
      className='navbar-brand'
      href={props.to}
    >
      {props.text}
    </a>
  )
}

export default NavbarBrand
