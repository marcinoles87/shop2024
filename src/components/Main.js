import React from 'react'

import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'

function Main() {

  const handleClick = () =>{
    console.log('yes')

    const start = 150

    const elements = document.querySelector('.main-elements')
    console.log(elements)
    elements.classList.add('changePosition')
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

<div className='arrow-right' onClick={handleClick}></div>
        {/* elementy pobrane do wyswietlenia z zew.API lub kolarz/zdjecia plus opis w ktory mozna wejsc --> nowa strona z opisem artykuly/produktu */}
      </div>

      
    </div>
  )
}

export default Main