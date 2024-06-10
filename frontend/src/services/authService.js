// frontend/src/services/authService.js
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/auth/'

const signup = (username, email, password) => {
  return axios.post(API_URL + 'signup', {username, email, password})
}

const signin = (email, password) => {
  return axios.post(API_URL + 'signin', {email, password})
}

export default {signup, signin}
