import './App.css'
import Laskuri from './Laskuri'
import GameList from './GameList'

// Navigointi ja Bootstrap importit
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Pitää asentaa:
// "npm install axios bootstrap react-bootstrap react-router-dom"

function App() {


  return (
    <>
        <Router>      
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <Nav.Link onClick={() => alert("Teave leht ei ole veel määratud.")}>About us</Nav.Link>
            <Nav.Link onClick={() => alert("Genret ei ole kaa")}>Genres</Nav.Link>
            <Nav.Link href='/games'>Games</Nav.Link>
            <Nav.Link href='/laskuri'>Pro Counter</Nav.Link>
        </Nav>
      </Navbar>


       <Routes>
       
          <Route path="/games"
          element={<GameList />}>
          </Route>
          
          <Route path="/laskuri" 
          element={<Laskuri />}>
        </Route>
        
        </Routes>
        
      </Router>

    </>
  )
}


export default App
