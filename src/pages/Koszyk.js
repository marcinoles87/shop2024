import React from 'react'
import '../App.css'

function Koszyk({koszyk , price}) {

  const zamowienieNr = Math.floor(Math.random()*100)
  return (
    <div className='koszyk-container'>
      <div className='koszyk-items'>
        <h2>Twoje zamowienie to : {zamowienieNr}</h2>
        <h3>Lista produktow :</h3>
        {koszyk.map( (item,index) => {
          return(
            <div className='koszyk-produkty' key={index}>
            <p>{item.index}</p>
            <p>{item.email}</p>
            <img src={item.picture.thumbnail} alt={item.index}></img>
            </div>
          )
        })}

        <h3>Podsumowanie : {price}</h3>
      </div>
    </div>
  )
}

export default Koszyk