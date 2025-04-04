import './Posts.css'
import React, {useState, useEffect} from 'react'

function GameList() {

    // useEffect suoritetaan aina alussa. Hyödynnetään
    // sitä datan hakemisessa.
    useEffect(() => {
        fetch("https://localhost:XXXX/api/games")
        .then(res => res.json()) // muuttaa jsonin js muotoon
        .then(data => setPosts(data))
    },
    [])

    // state jonne postaukset ladataan setPosts komennolla ylempänä
    const [games, setGames] = useState([])

  return (
    <>
     <h2>Games</h2>

     {games && games.map(g => (

      <div className='postbox'>
        <h3>{g.name} ({g.genreName})</h3>
        
        <p>Downloads {p.downloads}</p>
        <p>Stars {p.stars}</p>

      </div>      
     )
     )}
    </>
  )
}

export default GameList
