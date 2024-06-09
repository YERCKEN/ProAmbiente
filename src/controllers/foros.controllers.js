// HOLA IMPORTAMOS CONEXION BD
import {pool} from '../db.js'

//? FUNCIÓN PARA OBTENER FOROS  ====================================================================

export const getForos = async (req, res) => {

   try {

        //IMPRIMIMOS EL ENCABEZADO
        printEncabezado('OBTENIENDO FOROS');
        // OBTENEMOS TODOS LOS FOROS DESDE LA BD
        const [result] = await pool.query('SELECT f.id, f.titulo, f.descripcion, f.fecha_creacion, u.nombre_completo AS usuarios, u.nombre_usuario, f.usuario_id FROM foros f JOIN usuarios u ON f.usuario_id = u.id ORDER BY fecha_creacion DESC');


        console.log(result);
        //MANDAMOS UN JSON DE RESPUESTA
        res.json(result)

   } catch (error) {

        return res.status(500).json([error.message])
    
   }

}

//? FUNCIÓN PARA OBTENER FOR  ====================================================================
export const  getForo = async (req, res) => {

    try {

        //IMPRIMIMOS EL ENCABEZADO
        printEncabezado('OBTENIENDO FORO')

        //Obtenemos un foro por su ID
        const [result] = await pool.query('SELECT * FROM foros WHERE id = ?', req.params.id)

        console.log(result)

        // VERIFICAMOS SI SE ENCONTRÓ ALGÚN VALOR
        if (result.length === 0)
            return res.status(404).json({message: 'FORO NO ENCONTRADO'})

        res.json(result)
        console.log(result)

    } catch (error) {
        
        return res.status(500).json({message: error.message})

    }
    

}

//? FUNCIÓN PARA OBTENER FORO  ====================================================================

export const  createForo = async (req, res) => {

    try {

        //IMPRIMIMOS EL ENCABEZADO
        printEncabezado('CREANDO NUEVO FORO')
    
        //obetenmos los valores
        const {titulo, descripcion, idUsuario} = req.body
        
        // insertamos nuevo foro en la BD
        const [result] = await pool.query('INSERT INTO foros(titulo, descripcion, usuario_id) VALUES (?, ?, ?)', [titulo, descripcion, idUsuario]);

        //imprimimos valores en consola
        console.table([{ID: result.insertId, titulo, descripcion, idUsuario}]);

        //respondemos al server con json
        res.json({
            
            id: result.insertId,
            titulo,
            descripcion
        })

    } catch (error) {
        
        return res.status(500).json({message: error.message})
    }

} 


//?FUNCIÓN PARA ACTUALIZAR FORO  ====================================================================
export const  updateForo = async (req, res) => {

    try {

        printEncabezado('ACTUALIZANDO UN DATOS DE UN FORO');

        // ACTUALIZAMOS EL FORO CON SU ID
        const [result] = await pool.query('UPDATE foros SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ]);

        //verificamos si se encontró el foro
        if (result.affectedRows === 0)
            return res.status(404).json({message: 'FORO NO ENCONTRADO'})

        res.json(result);

    } catch (error) {

        return res.status(500).json({message: error.message});
        
    }
} 


//?FUNCIÓN PARA ELIMINAR FORO ====================================================================
export const  deleteForo = async (req, res) => {

    try {

        // ELIMINAMOS UN FORO POR SU ID
        const [result] = await pool.query('DELETE FROM foros WHERE id = ?', [req.params.id]);
        
        if( result.affectedRows === 0)
            return res.status(404).json({message: 'Foro no encontrado'});

        //enviamos que todo está bien pero no se recibe ningún dato
        return res.sendStatus(204);

    } catch (error) {

        return res.status(500).json({message: error.message})
        
    }

} 




//FUNCIÓN PARA IMPRIMIR EN CONSOLA

const printEncabezado = ( encabezado ) =>{

    console.log('\n\n=========================================================')
    console.log(`\n${encabezado}\n\n`);
}