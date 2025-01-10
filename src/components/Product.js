import React, { useEffect, useState } from 'react'



function Product(data) {


  console.log(data)
  

  return (



  
    <div className='product-container'>
      <h1>Products</h1>

      {data ? 

      data.map( (item,index) => {
        return(
          <div className='product'>
            <p>{item.artistDisplayName}</p>
          </div>
        )
      })

 : ""}
        
    </div>
  )
}

export default Product