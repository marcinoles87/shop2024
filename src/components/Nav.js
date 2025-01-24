import React from 'react'

function Nav({koszyk}) {
  return (
    <div className='nav-container'>
      <div className='nav-elements'>
        <ul className='nav-elements-container'>
          
          <li className='nav-element'>Home</li>
          <li className='nav-element'>About Us</li>
          <li className='nav-element'>Products</li>
          <li className='nav-element'>Contact</li>
          <li className='nav-element'>Koszyk : {koszyk}</li>
          
          
        </ul>

        
      </div>
    </div>
  )
}

export default Nav