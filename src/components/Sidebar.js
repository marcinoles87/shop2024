import React, { useState } from 'react'

function Sidebar({data,setData}) {

    const [price,setPrice] = useState('');
    const [name,setName] = useState('');
    const [color,setColor] = useState('')

    console.log(data)
    

    const handleFilter = (e) =>{

        const searchData = e.target.value
        e.preventDefault()
        setName(searchData)
        console.log(name,price,color)
        const dane = [...data]
        const search = dane.filter( (item) => item.name.last.includes(searchData))

        if(search === ''){
            setData(data)
            console.log(data)
        }else{
            setData(search)
            console.log(data)
        }
    }

    

  return (
    <div className='sidebar-container'>
        <div className='sidebar-items'>
            <div className='sidebar-item'>
                <label>Name</label>
                <input onChange={handleFilter}></input>
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