//IMPORTAMOS LA CONEXIÓN A LA BD
import { pool } from "../db.js";

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
        console.table([{username, name, email, password}])
        
        //INSERTAMOS USUARIO EN LA BASE DE DATOS
        const [result] = await pool.query('INSERT INTO usuarios(nombre_usuario, nombre_completo, correo, contrasena) VALUES (?, ?, ?, ?)', [
            username,
            name,
            email,
            password
        ])

        //imprimimos valores en consola
        console.log("\n✓ USUARIO REGISTRADO")
        console.table([{ID: result.insertId, username, name, email, password}]);
   

        return res.json({
            id: result.insertId,
            username,
            name,
            email,
            password
        })

    } catch (error) {

        return res.status(500).json({message: error.message})
    }

}