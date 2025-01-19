import React, { useEffect, useState } from 'react'



function Product({data}) {

  

  


  return (

    <div className='product-container'>
     

      {data.map ( (item,index) => {
                return(
                  <div className='product-one' key={index}>
                    <img src={item.picture.thumbnail} alt={item.email}></img>
                    <div className='product-info'>
                      <h4><b>{item.cell}</b></h4>
                      <p>{item.gender}</p>
                      <p>{item.email}</p>
                    </div>
                  
                  
                  </div>
                )
              })}

      

      
  

     
          <div className='product'>
           
          </div>
        
    

 
        
    </div>
  )
}

export default Product