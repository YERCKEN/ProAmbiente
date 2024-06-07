//improtamos zod
import {object, z} from 'zod'

//SCHEMA PARA REGISTRO =========================================

export const registerSchema = z.object({
    //usuario
     username: z.string({
        required_error: "! El nombre de usuario es necesario"
     }),
     //nombre
     name: z.string({
        required_error: "! El nombre completo es necesario"
     }),
    //correo
     email: z.string({
        required_error: "! El correo es necesario"
     }).email({
        message: "Correo Inválido"
     }),
    //password
     password: z.string({
        required_error: "! La contraseña es necesaria"
     }).min(4, {
        message: '! La contraseña debe tener al menos 4 carácteres'
     }),
     
})


//SCHEMA PARA LOGIN =========================================
export const loginSchema = z.object({

    //usuario
    username: z.string({
        required_error: "El nombre de usuario es necesario"
     }),

     //password
     password: z.string({
        required_error: "La contraseña es necesaria"
     }).min(4, {
        message: 'la contraseña debe tener al menos 6 carácteres'
     }),
})