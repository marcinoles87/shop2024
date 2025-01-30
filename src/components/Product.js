import React, { useEffect, useState } from 'react'



function Product({data , koszyk , setKoszyk}) {

  const r = Math.random()*300
  const g = Math.random()*300
  const b = Math.random()*300
  const color = <div style={{width:'300px', height:'300px', margin:'10px',backgroundColor:`rgb(${r},${g},${b})`}} ></div>



console.log(color)
  

  
const products = [
  {
    name : 'name 1',
    price : '99.99$',
    img : color
  },

  {
    name : 'name 1',
    price : '99.99$',
    img : color
  },

  {
    name : 'name 1',
    price : '99.99$',
    img : color
  },

  {
    name : 'name 1',
    price : '99.99$',
    img : color
  }
]


const handleClick = ( (item) => {

 console.log(koszyk)
 setKoszyk([...koszyk,item])
  

})

// console.log(koszyk)
  


  return (

    <div className='product-container'>
     

      {data.map ( (item,index) => {
                return(
                  <div className='product-one' key={index}>
                    <img src={item.picture.thumbnail} alt={item.email}></img>
                    <div className='product-info'>
                      <h4><b>Product Name</b></h4>
                      <p>Price : 99.99$</p>
                      <p>{item.email}</p>
                      <button onClick={( () => handleClick(item))}>Add to card</button>
                    </div>
                  
                  
                  </div>
                )
              })}

              {/* {products.map ( (item,index) => {
                return(
                  <>
                  {item.img}
                  </>
                )
              })} */}

      

      
  

     
          <div className='product'>
           
          </div>
        
    

 
        
    </div>
  )
}

export default Product