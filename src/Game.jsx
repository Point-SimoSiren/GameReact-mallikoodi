import './Posts.css'
import React, {useState} from 'react'

function Game({g}) {

  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className='postbox'>

    <h3 onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        >
        {g.name} ({g.genreName})</h3>

            <button>Delete</button>
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
