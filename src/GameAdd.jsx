import React, {useState} from "react"
import './App.css'
import GameService from './services/GameService'


function GameAdd() {

// Statet jotka pitää kirjaa input kenttien sisällöstä
const [name, setName] = useState("")
const [genreId, setGenreId] = useState("")
const [releaseDate, setReleaseDate] = useState("")
// Downloads ja starts on alussa nolla ja ne annetaan
// vasta kun objekti luodaan alapuolella

// Funktio jota kutsutaan kun alempana returnin sisällä oleva formi submitoidaan
const formSubmitted = (event) => {
    event.preventDefault() // sivua ei päivitetä kuten oletuksena tehtäisiin
    
    // Luodaan peli olio/objekti ja tiedot otetaan stateista (yläpuolelta)
    const newGame = {
        name: name,
        genreId: genreId,
        releaseDate: releaseDate,
        downloads: 0,
        stars: 0
    }

    // Käytetään Services/Game tiedostossa olevaa create funktiota
    // ja välitetään edellä luotu game olio sille paramterina
    GameService.create(newGame)
    .then(response => {
        alert(response.data)
        window.location.reload()
    })
}


return(
    <div className="add-div">
        <form onSubmit={formSubmitted}>
            <input type="text" placeholder="Name" value={name} 
            onChange={({target}) => setName(target.value)}
            required
            />

            <input type="number" placeholder="GenreID" value={genreId}
            onChange={({target}) => setGenreId(target.value)} 
            required />

            <input type="date" placeholder="Date published" value={releaseDate}
            onChange={({target}) => setReleaseDate(target.value)} 
            required />

            <input type="submit" value="Save"/>
        </form>
    </div>
    )
}

export default GameAdd