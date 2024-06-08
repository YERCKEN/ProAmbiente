import axios from "./axios.js";

export const getForosRequest = () => axios.get('/Foros')
export const getForoRequest = (id) => axios.get(`/Foros/${id}`)
export const createForoRequest = (Foro) => axios.post('/Foros', Foro)
export const uptdateForoRequest = (Foro) => axios.put(`/Foros/${Foro._id}`, Foro)
export const deleteForoRequest = (id) => axios.delete(`/Foros/${id}`)
