
import axios from 'axios'
//DIRECCIÓN DE NUESTRO BACKEND
const API = 'http://localhost:4000/api'
const API2 = 'http://localhost:4000'

//HACEMOS PETICIÓN       te envian un usuaruo y tu haces un post al backend y le mandas el user
export const registerRequest = user => axios.post(`${API}/register`, user)

//HACEMOS PETICIÓN LOGIN       te envian un usuaruo y tu haces un post al backend y le mandas el user
export const loginRequest = user => axios.post(`${API}/login`, user)    
export const getForosRequest2 = () => axios.get(`${API2}/Foros`)
export const createForoRequest2 = foro => axios.post(`${API2}/Foros`, foro)