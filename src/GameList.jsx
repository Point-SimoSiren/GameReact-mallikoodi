import Game from './Game'
import GameAdd from './GameAdd'
import './App.css'
import React, {useState, useEffect} from 'react'

function GameList() {

    // useEffect suoritetaan aina alussa. Hyödynnetään
    // sitä datan hakemisessa.
    useEffect(() => {
        fetch("https://localhost:7037/api/Games")
        .then(res => res.json()) // muuttaa jsonin js muotoon
        .then(data => setGames(data))
    },
    [])

    // state jonne postaukset ladataan setPosts komennolla ylempänä
    const [games, setGames] = useState([])
    // Onko lisäysikkuna näkyvillä tällä hetkellä vai ei
    const [addingNew, setAddingNew] = useState(false)
    
    // State hakutoimintoa varten
    const [hakusana, setHakusana] = useState("")

  return (
    <>
    <h2>GAMES</h2>

      {!addingNew && <button className='add-btn' 
      onClick={() => setAddingNew(true)}>
      Create new game</button>}

      {addingNew && <GameAdd />}

      <input type='text' placeholder='Search..' value={hakusana}
      onChange={({target}) => setHakusana(target.value) }
      />

     {
     
     games && games.map(g => {

      const lcname = g.name.toLowerCase()
      
      if (lcname.includes(hakusana)) {
        return(
        <Game key={g.gameId} g={g} />
        )
      }}
     )
     }
    </>
  )
}

export default GameList
