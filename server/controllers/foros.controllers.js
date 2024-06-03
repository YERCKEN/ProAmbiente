//IMPORTAMOS CONEXION BD
import {pool} from '../db.js'

// FUNCIÓN PARA OBTENER FOROS
export const getForos = async (req, res) => {

    console.log('\n\n=========================================================')
    console.log('\nOBTENIENDO FOROS\n\n');

    //TODO: OBTENEMOS TODOS LOS FOROS DESDE LA BD
    const [result] = await pool.query('SELECT * FROM foros ORDER BY fecha_creacion DESC');

    console.log(result);
    //MANDAMOS UN JSON DE RESPUESTA
    res.json(result)

    console.log('\n\n=========================================================')

}

//FUNCIÓN PARA OBTENER FORO
export const  getForo = async (req, res) => {
    //TODO: OBTENEMOS UN FORO EN ESPECÍFICO
    console.log('\n\n=========================================================')
    console.log('\nOBTENIENDO FORO\n\n');

    const [result] = await pool.query('SELECT * FROM foros WHERE id = ?', req.params.id)
    console.log(result)

    //! VERIFICAMOS SI SE ENCONTRÓ ALGÚN VALOR
    if (result.length == 0)
        return res.status(404).json({message: 'FORO NO ENCONTRADO'})

    res.json(result)

    console.log('\n\n=========================================================')
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