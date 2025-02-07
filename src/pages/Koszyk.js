import React from 'react'
import '../App.css'

function Koszyk({koszyk , price}) {

  const zamowienieNr = Math.floor(Math.random()*100)
  const dzienZamowienia = Date()
  return (
    <div className='koszyk-container'>
      <div className='koszyk-items'>
          <h2>Twoje zamowienie to : {zamowienieNr} z dnia : </h2>
          <p>{dzienZamowienia.toString()}</p>
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

   
      </div>

      <div className='koszyk-podsumowanie'>
          <h3>Podsumowanie : </h3>
          <h2>ilość produktów: {koszyk.length}</h2>
          <h2>Wartośc produktów : </h2>
        </div>
      
    </div>
  )
}

export default Koszyk