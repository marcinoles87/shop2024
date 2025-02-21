import React, { useState } from 'react'
import '../App.css'

function Koszyk({koszyk , price}) {

  const [name,setName] = useState('')
  const [adres,setAdres] = useState('')
  const [phone,setPhone] = useState('')

  const zamowienieNr = Math.floor(Math.random()*100)
  const dzienZamowienia =new Date()
  const dzien = dzienZamowienia.getDay()
  const miesiac = dzienZamowienia.getMonth()
  const godzina = dzienZamowienia.getHours()
  const minuta = dzienZamowienia.getMinutes()
  const rok = dzienZamowienia.getUTCFullYear()

  return (
    <div className='koszyk-container'>
      <div className='koszyk-items'>
          
          <h2>Twoje zamowienie nr.{rok}/{zamowienieNr} </h2>
          <p>Zamówienie z dnia : {dzien}.{miesiac}.{rok} godzina :{godzina}:{minuta}</p>
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
          <h2>Twoje dane wysyłkowe :</h2>
          <label>
           Imie i Nazwisko <input onChange={e => setName(e.target.value)} ></input>
          </label>

          <label>
           Adres wysyłki<input onChange={e => setAdres(e.target.value)}></input>
          </label>

          <label>
           Telefon <input onChange={e=> setPhone(e.target.value)}></input>
          </label>
          
          <h3>Podsumowanie : </h3>
          <p>{name}</p>
          <p>{adres}</p>
          <p>{phone}</p>
          <h2>ilość produktów: {koszyk.length}</h2>
          <h2>Wartośc produktów : </h2>
        </div>


      
    </div>
  )
}

export default Koszyk