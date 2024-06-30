import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-app-8f4de.cloudfunctions.net/api' //The api from backend or cli=oud function
})

export default instance;