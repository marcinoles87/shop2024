import React, { useEffect, useState } from 'react'



function Product({data}) {

  

  


  return (

    <div className='product-container'>
      <h1>Products</h1>

      {data.map ( (item,index) => {
                return(
                  <>
                  <p>{item.cell}</p>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  </>
                )
              })}

      

      
  

     
          <div className='product'>
           
          </div>
        
    

 
        
    </div>
  )
}

export default Product