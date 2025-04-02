import './App.css'
import React from 'react'


function Laskuri() {

// Tämän komponentin state on luku.
// Set lukua kutsumalla lukua voi muuttaa.
// nolla lopussa on luku staten alkuarvo
const [luku, setLuku] = React.useState(0)

  return (
    <>

     <h2>Laskuri</h2>

     <h3>{luku}</h3>

     <button onClick={() => setLuku(luku + 1)}>+</button>
     <button onClick={() => setLuku(luku - 1)}>-</button>
     <button onClick={() => setLuku(0)}>Zero</button>


    </>
  )
}


export default Laskuri
