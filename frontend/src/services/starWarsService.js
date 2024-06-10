// frontend/src/services/starWarsService.js
import axios from 'axios'

const API_URL = 'https://swapi.dev/api/people/'

const getCharacters = (page = 1) => {
  return axios.get(`${API_URL}?page=${page}`)
}

export default {getCharacters}
