//IMPORTAMOS LA CONEXIÓN A LA BD
import { pool } from "../db.js";
//IMPORTAMOS BCRYPT PARA ENCRIPTAR LA PASSWORD
import bcrypt from 'bcryptjs'

import {createAccessToken} from '../libs/jwt.js'

//LOGIN ================================================================
export const login = async (req, res) => {

    // OBTENEMOS EL USUARIO CONTRASEÑA CORREO
    const {username, password} = req.body

    return res.json({
            username,
            password
        })
}

//LOGIN ================================================================
export const register = async (req, res) => {

    try {

        // OBTENEMOS EL USUARIO CONTRASEÑA CORREO
        const {username, name, email, password} = req.body
    
        //ENCRIPTAMOS LA CONTASEÑA
        
        const passwordHash = await bcrypt.hash(password, 10)

        //INSERTAMOS USUARIO EN LA BASE DE DATOS
        const [result] = await pool.query('INSERT INTO usuarios(nombre_usuario, nombre_completo, correo, contrasena) VALUES (?, ?, ?, ?)', [
            username,
            name,
            email,
            passwordHash
        ]);

        //imprimimos valores en consola
        console.log("\n✓ USUARIO REGISTRADO")
        console.table([{ID: result.insertId, username, name, email, password}]);
   
        //GENRAMOS TOKEN
        const token = await createAccessToken({ id: result.insertId });
        res.cookie("token", token);
        
        // respondemos datos del usuario
        res.json({
            id: result.insertId,
            username,
            name,
            email
        })

    } catch (error) {

        return res.status(500).json({message: error.message})
    }

}