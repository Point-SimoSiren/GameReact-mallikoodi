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


  return (
    <>
     <h2 onClick={() => setShowGames(!showGames)}>Games</h2>

     {showGames && games && games.map(g => (

      <div className='postbox'>
        <h3>{g.name} ({g.genreName})</h3>
        
        <p>Downloads {g.downloads}</p>
        <p>Stars {g.stars}</p>

      </div>      
     )
     )}
    </>
  )
}

export default GameList
