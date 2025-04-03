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

     <h2>{luku}</h2>

     {luku > 9 && <p>Olet saavuttanut kympin etapin</p>}

    <br />
    
     {luku > 19 ? <p>Olet saavuttanut kahdenkympin etapin</p> : 
     <p>Kahteenkymppiin on vielä matkaa</p>
     }


     <button onClick={() => setLuku(luku + 1)}>+</button>
     <button onClick={() => setLuku(luku - 1)}>-</button>
     <button onClick={() => setLuku(0)}>Zero</button>
    </>
  )
}


export default Laskuri
