import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-items'>
            <div className='sidebar-item'>
                <label>Name</label>
                <input></input>
            </div>

            <div className='sidebar-item'>
                <label>Price</label>
                <input></input>
            </div>

            <div className='sidebar-item'>
                <label>Color</label>
                <input></input>
            </div>

            <button>Filter</button>
        </div>
    </div>
  )
}

export default Sidebar