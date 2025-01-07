import React from 'react'

import logo from '../img/logo.png'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src={logo} alt='logo'></img>
      </div>

      <div className='header-text'>
        <h1>Shop 2025 online </h1>
      </div>
    </div>
  )
}

export default Header