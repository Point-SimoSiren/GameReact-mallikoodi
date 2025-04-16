import './App.css'
import React, {useState} from 'react'
import GameService from './services/GameService'
import GameEdit from './GameEdit'

// Peli lähetetään g -aliasnimellä GameList komponentista
// jotta tällä Game komponentilla on mahdollisuus näyttää pelin tietoja
function Game({g}) {
  
  const [showDetails, setShowDetails] = useState(false)
  const [editing, setEditing] = useState(false)

  // Poistofunktio jota kutsutaan deletenapista ja annetaan parametrina
  // g mikä tarkoittaa koko peli objektia.
  function deleteGame(g) {
    let confirm = window.confirm("Remove " + g.name + "?")

    if (confirm === true) {
      GameService.remove(g.gameId)
      .then(response => alert(response))
      .then(window.location.reload())
      
    }
  }

  return (
    <div className='gamebox'>

    <h3 style={{cursor: 'pointer'}}
     onClick={() => setShowDetails(!showDetails)}>
        {g.name} ({g.genreName})</h3>

            <button onClick={() => deleteGame(g)}>Delete</button>

            <button onClick={() => setEditing(!editing)}>Edit</button>

      {editing && <GameEdit old={g} />}

     {!editing && showDetails &&
        <>
            <p>Released {g.releaseDate}</p>
            <p>Downloads {g.downloads}</p>
            <p>Stars {g.stars}</p>
        </>
    }
  </div> 
  )
}

export default Game
