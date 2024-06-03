//IMPORTAMOS CONEXION BD
import {pool} from '../db.js'

// FUNCIÓN PARA OBTENER FOROS
export const getForos = (req, res) => {
    res.send('OBTENIENDO FOROS')
}

//FUNCIÓN PARA OBTENER FORO
export const  getForo = (req, res) => {
    res.send('OBTENIENDO UN FORO')
}

//FUNCIÓN PARA OBTENER FORO
export const  createForo = async (req, res) => {

    console.log('\n\n=========================================================')
    console.log('\nCREANDO NUEVO FORO\n\n')
    

    //TODO: obetenmos los valores
    const {titulo, descripcion, idUsuario} = req.body
    
    //TODO insertamos nuevo foro en la BD
    const [result] = await pool.query('INSERT INTO foros(titulo, descripcion, usuario_id) VALUES (?, ?, ?)', [titulo, descripcion, idUsuario]);

    //imprimimos valores en consola
    console.table([{ID: result.insertId, titulo, descripcion, idUsuario}]);

    //TODO respondemos al server con json
    res.json({
        
        id: result.insertId,
        titulo,
        descripcion
    })
    console.log('\n\n=========================================================')

} 


//FUNCIÓN PARA OBTENER FORO
export const  updateForo = (req, res) => {
    res.send('ACTUALIZANDO FORO')
} 

//FUNCIÓN PARA ELIMINAR FORO
export const  deleteForo = (req, res) => {
    res.send('BORRANDO FORO')
} 