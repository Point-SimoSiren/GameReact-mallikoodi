import Game from './Game'
import GameAdd from './GameAdd'
import './Posts.css'
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
    const [showGames, setShowGames] = useState(false)
    const [addingNew, setAddingNew] = useState(false)


  return (
    <>
    <h2>GAMES</h2>

     {!showGames && <button onClick={() => setShowGames(!showGames)}>
      Show games</button>}

      {showGames && <button onClick={() => setShowGames(!showGames)}>
      Hide games</button>}

      {showGames && !addingNew && <button className='add-btn' 
      onClick={() => setAddingNew(true)}>
      Create new game</button>}

      {addingNew && <GameAdd />}


     {showGames && games && games.map(g => (

        <Game key={g.gameId} g={g} />
     )
     )}
    </>
  )
}

export default GameList
