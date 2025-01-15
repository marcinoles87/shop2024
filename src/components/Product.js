import React, { useEffect, useState } from 'react'



function Product({data}) {

 
console.log(data)

  

  return (



  
    <div className='product-container'>
      <h1>Products</h1>

      {data.map( (item , index) => {
        return(
          <>
          <h3>{item.caution}</h3>
          </>
        )
      })}

     
          <div className='product'>
           
          </div>
        
    

 
        
    </div>
  )
}

export default Product