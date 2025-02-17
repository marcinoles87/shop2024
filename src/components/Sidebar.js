import React, { useState } from 'react'

function Sidebar() {

    const [price,setPrice] = useState('');
    const [name,setName] = useState('');
    const [color,setColor] = useState('')

  return (
    <div className='sidebar-container'>
        <div className='sidebar-items'>
            <div className='sidebar-item'>
                <label>Name</label>
                <input onChange={setName( (e) => e.target.value)}></input>
            </div>

            <div className='sidebar-item'>
                <label>Price</label>
                <input onClick={setPrice( (e) => e.target.value)}></input>
            </div>

            <div className='sidebar-item'>
                <label>Color</label>
                <input onClick={setColor( (e) => e.target.value)}></input>
            </div>

            <button onClick={handleFilter}>Filter</button>
        </div>
    </div>
  )
}

export default Sidebar