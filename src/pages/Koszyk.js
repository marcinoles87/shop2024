import React from 'react'

function Koszyk({koszyk}) {
  return (
    <div className='koszyk-container'>
      <div>
        <h2>Twoje zamowienie to :</h2>
        <h3>Lista produktow :</h3>
        {koszyk.map( (item,index) => {
          return(
            <div className='koszyk-produkty' key={index}>
            <p>{item.index}</p>
            <p>{item.email}</p>
            <p>{item.picture.thumbnail}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Koszyk