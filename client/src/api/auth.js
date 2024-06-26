import instance from './axios.js'

//DIRECCIÓN DE NUESTRO BACKEND


//HACEMOS PETICIÓN       te envian un usuaruo y tu haces un post al backend y le mandas el user
export const registerRequest = (user) => instance.post(`/register`, user)

//HACEMOS PETICIÓN LOGIN       te envian un usuaruo y tu haces un post al backend y le mandas el user
export const loginRequest = (user) => instance.post('/login', user)

export const verifyTokenRequest = (token) => {
    // Envía el token como parte de los datos en la solicitud POST
    return instance.post('/verify', { token });
};