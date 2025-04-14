import './App.css'
import React, {useState} from 'react'
import GameService from './services/GameService'

// Peli lähetetään g -aliasnimellä GameList komponentista
// jotta tällä Game komponentilla on mahdollisuus näyttää pelin tietoja
function Game({g}) {
  
  const [showDetails, setShowDetails] = useState(false)

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
     onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}>
        {g.name} ({g.genreName})</h3>

            <button onClick={() => deleteGame(g)}>Delete</button>

            <button>Edit</button>

    {showDetails &&
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
