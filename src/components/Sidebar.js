import React, { useState } from 'react'

function Sidebar() {

    const [price,setPrice] = useState('');
    const [name,setName] = useState('');
    const [color,setColor] = useState('')

    const handleFilter = () =>{
        console.log(name,price,color)
    }

  return (
    <div className='sidebar-container'>
        <div className='sidebar-items'>
            <div className='sidebar-item'>
                <label>Name</label>
                <input onChange={e => setName(e.target.value)}></input>
            </div>

            <div className='sidebar-item'>
                <label>Price</label>
                <input onChange={e => setPrice(e.target.value)}></input>
            </div>

            <div className='sidebar-item'>
                <label>Color</label>
                <input onChange={e => setColor(e.target.value)}></input>
            </div>

            <button onClick={handleFilter}>Filter</button>
        </div>
    </div>
  )
}

export default Sidebar