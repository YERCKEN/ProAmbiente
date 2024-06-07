//IMPORTAMOS LA CONEXIÓN A LA BD
import { pool } from "../db.js";
//IMPORTAMOS BCRYPT PARA ENCRIPTAR LA PASSWORD
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'


//LOGIN ================================================================

//LOGIN ================================================================
export const login = async (req, res) => {

    try {

        // OBTENEMOS EL USUARIO CONTRASEÑA
        const {username, password} = req.body
    
        // BUSCAMOS EL USAURIO EN LA BASE DE DATOS
        const [result] = await pool.query('SELECT * FROM usuarios WHERE nombre_usuario = ?', [username]);
        
        if(result.length === 0)
            return res.status(500).json({message: 'El usuario no existe'})

        //guardamos data del user
        const userData = result[0];
        console.log("\n\nDATOS DEL USUARIO")
        console.table(userData)

        //COMPARAMOS LA CONTRASEÑA
        const isMatch = await bcrypt.compare(password, userData.contrasena);
        if(!isMatch) return res.status(500).json({message: "Contraseña incorrecta"});

        //GENRAMOS TOKEN
        const token = await createAccessToken({id: userData.id });
        res.cookie("token", token);
        
        // respondemos datos del usuario
        res.json({
            id: userData.id,
            username: userData.nombre_usuario,
            name: userData.nombre_completo,
            email: userData.correo
        })

    } catch (error) {

        return res.status(500).json({message: error.message})
    }

}

//REGSITRO ================================================================
export const register = async (req, res) => {

    try {

        // OBTENEMOS EL USUARIO CONTRASEÑA CORREO
        const {username, name, email, password} = req.body
        
        // VERIFICAMOS QUE NO EXISTE un username y un correo igual y respondemos los errores correspondientes
        const [existingUser] = await pool.query('SELECT * FROM usuarios WHERE nombre_usuario = ? OR correo = ?', [username, email]);

        if (existingUser.length > 0) {
            let errors = [];
            if (existingUser[0].nombre_usuario === username) {
                errors.push('! Nombre de usuario ya existe');
            }
            if (existingUser[0].correo === email) {
                errors.push('! Correo electrónico ya está en uso');
            }
            return res.status(400).json(errors);
        }
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
        const token = await createAccessToken({id: result.insertId});
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


// LOGOUT ================================================================
export  const logout = (req, res)=>{
    res.cookie("token", "", {
        expires: new Date(0),
    });

    return res.sendStatus(200)

}

// PERFIL ================================================================
export  const profile = async(req, res)=>{
    

    try {
        
        console.log('\nID DEL USUARIO CON TOKEN')
        console.table(req.user.id)

        // BUSCAMOS EL USAURIO EN LA BASE DE DATOS
        const [result] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [req.user.id]);

        const userData = result[0]
        
        // respondemos datos del usuario
        res.json({
            id: userData.id,
            username: userData.nombre_usuario,
            name: userData.nombre_completo,
            email: userData.correo,
            fechaRegistro: userData.fecha_registro
        })

    } catch (error) {
        
        return res.status(500).json({message: error.message})
    }

            

}