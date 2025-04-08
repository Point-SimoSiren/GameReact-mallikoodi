
// Täällä hoidetaan kaikki http pyynnöt palvelimelle
// käyttäen Axios kirjastoa

// ANNA KOMENTO NPM INSTALL AXIOS

import Axios from 'axios'

const baseUrl = "https://localhost:7037/api/games"

// Hae kaikki pelit backendistä
// tätä ei vielä käytetä kun on useEfectissä
// käytetty perus fetchiä.
const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

// Tämä on käytössä
// Uuden luontiin käytettävä http post pyyntö
const create = (newGame) => {
    const request = Axios.post(baseUrl, newGame)
    // palauttaa palvelimen vastauksen GameAdd komponentille
    return request.then(response => response)
}

// Poisto ///////////////////////////////
const remove = (id) => {
    const request = Axios.delete(baseUrl + "/" + id)
    return request.then(response => response.data)
}

export default {getAll, create, remove}