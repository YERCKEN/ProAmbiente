import axios from "./axios.js";

export const getNoticiasRequest = () => axios.get('/Noticias')
export const getNoticiaRequest = (id) => axios.get(`/Noticias/${id}`)
export const createNoticiaRequest = (Foro) => axios.post('/Noticias', Foro)
export const uptdateNoticiaRequest = (Foro) => axios.put(`/Noticias/${Foro._id}`, Foro)
export const deleteNoticiaRequest = (id) => axios.delete(`/Noticias/${id}`)
