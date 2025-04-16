import React, {useState} from "react"
import './App.css'
import GameService from './services/GameService'

function GameEdit({old}) {

// Statet jotka pitää kirjaa input kenttien sisällöstä
const [name, setName] = useState(old.name)
const [genreId, setGenreId] = useState(old.genreId)
const [releaseDate, setReleaseDate] = useState(old.releaseDate)
const [downloads, setDownloads] = useState(old.downloads)
const [stars, setStars] = useState(old.stars)

// Funktio jota kutsutaan kun alempana returnin sisällä oleva formi submitoidaan
const formSubmitted = (event) => {
    event.preventDefault() // sivua ei päivitetä kuten oletuksena tehtäisiin
    
    // Luodaan peli olio/objekti ja tiedot otetaan stateista (yläpuolelta)
    const editedGame = {
        gameId: old.gameId,
        name: name,
        genreId: genreId,
        releaseDate: releaseDate,
        downloads: downloads,
        stars: stars
    }

    // Käytetään Services/Game tiedostossa olevaa edit funktiota
    // ja välitetään edellä luotu game olio sille paramterina
    GameService.edit(editedGame)
    .then(response => {
        alert(response)
        window.location.reload()
    })
}


return(
    <div className="add-div">
        <form onSubmit={formSubmitted}>

            <input type="text" placeholder="Name" value={name} 
            onChange={({target}) => setName(target.value)}
            required />

            <input type="number" placeholder="GenreID" value={genreId}
            onChange={({target}) => setGenreId(target.value)} 
            required />

            <input type="date" placeholder="Date published" value={releaseDate}
            onChange={({target}) => setReleaseDate(target.value)} 
            required />

            <input type="number" placeholder="Downloads" value={downloads}
            onChange={({target}) => setDownloads(target.value)} 
            required />

            <input type="number" placeholder="Stars" value={stars}
            onChange={({target}) => setStars(target.value)} 
            required />

            <input type="submit" value="Save"/>
        </form>
    </div>
    )
}

export default GameEdit