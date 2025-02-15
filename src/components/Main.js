import React, { useState } from 'react'

import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/adidas1.webp'

function Main() {

  const [start , setStart] = useState(0)

  const handleNext = () =>{
  
    setStart( 
      start => start + 150
    )

    const elements = document.querySelector('.main-elements')
    elements.style.transform = "translateX(" + start + "px)"

  }

  const handlePrev = () =>{
  

    setStart( 
      start => start - 150
    )

    const elements = document.querySelector('.main-elements')
    elements.style.transform = "translateX(" + start + "px)"

  }

  const mainElements = [
    {
      name : '1' ,
      img : img1

    } ,

    {
      name : '2' ,
      img : img2

    } ,

    {
      name : '3' ,
      img : img3

    } ,

    {
      name : '3' ,
      img : img3

    } ,

    {
      name : '3' ,
      img : img3

    } ,

    {
      name : '3' ,
      img : img4

    } ,

  ]
  return (
    <div className='main-cotnainer'>
      <div className='main-elements'>

        {mainElements.map( (item , index) => {
          return(
            <div className='main-element' key={index}>
              <img src={item.img} alt={item.name}></img>
              
              
            </div>
          )
        })}


      </div>

      <button className='arrow-right' onClick={handleNext}>{`>`}</button>
      <button className='arrow-left' onClick={handlePrev}>{`<`}</button>

      
    </div>
  )
}

export default Main