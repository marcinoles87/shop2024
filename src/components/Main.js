import React from 'react'

import img1 from '../img/logo.png'
import img2 from '../img/logo.png'
import img3 from '../img/logo.png'

function Main() {

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
            <div className='main-element'>
              <img src={item.img} alt={item.name}></img>
              <p>{item.name}</p>
              
            </div>
          )
        })}

        {/* elementy pobrane do wyswietlenia z zew.API lub kolarz/zdjecia plus opis w ktory mozna wejsc --> nowa strona z opisem artykuly/produktu */}
      </div>
    </div>
  )
}

export default Main