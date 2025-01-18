import React, { useEffect, useState } from 'react'



function Product({data}) {

  

  


  return (

    <div className='product-container'>
     

      {data.map ( (item,index) => {
                return(
                  <div className='product-one'>
                  <p>{item.cell}</p>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  <img src={item.picture.thumbnail} alt={item.email}></img>
                  </div>
                )
              })}

      

      
  

     
          <div className='product'>
           
          </div>
        
    

 
        
    </div>
  )
}

export default Product