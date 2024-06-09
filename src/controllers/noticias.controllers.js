// HOLA IMPORTAMOS CONEXION BD
import {pool} from '../db.js'

//? FUNCIÓN PARA OBTENER FOROS  ====================================================================

export const getNoticias = async (req, res) => {

   try {

        //IMPRIMIMOS EL ENCABEZADO
        printEncabezado('OBTENIENDO NOTICIAS');
        // OBTENEMOS TODOS LOS FOROS DESDE LA BD
        const [result] = await pool.query('SELECT r.id, r.titulo, r.descripcion, u.nombre_completo nombreCompleto, u.nombre_usuario AS usuario, r.fecha_reporte, r.verificado, r.fecha_verificacion, v.nombre_completo AS verificado_por,  v.nombre_usuario AS verificado_por_nombre_usuario FROM reportes r LEFT JOIN usuarios u ON r.usuario_id = u.id LEFT JOIN usuarios v ON r.verificado_por = v.id ORDER BY r.fecha_reporte DESC');
       
    console.log(result);
        //MANDAMOS UN JSON DE RESPUESTA
        res.json(result)

   } catch (error) {

        return res.status(500).json([error.message])
    
   }

}

//? FUNCIÓN PARA OBTENER FOR  ====================================================================
export const  getNoticia = async (req, res) => {

    try {

        //IMPRIMIMOS EL ENCABEZADO
        printEncabezado('OBTENIENDO NOTICIA')

        //Obtenemos un foro por su ID
        const [result] = await pool.query('SELECT * FROM reporte WHERE id = ?', req.params.id)

        console.log(result)

        // VERIFICAMOS SI SE ENCONTRÓ ALGÚN VALOR
        if (result.length === 0)
            return res.status(404).json({message: 'NOTICIA NO ENCONTRADO'})

        res.json(result)

    } catch (error) {
        
        return res.status(500).json({message: error.message})

    }
    

}

//? FUNCIÓN PARA OBTENER FORO  ====================================================================

export const  createNoticia = async (req, res) => {

    try {

        //IMPRIMIMOS EL ENCABEZADO
        printEncabezado('CREANDO NUEVA NOTICIA')
    
        //obetenmos los valores
        const {titulo, descripcion, idUsuario} = req.body
        
        // insertamos nuevo foro en la BD
        const [result] = await pool.query('INSERT INTO reportes(titulo, descripcion, usuario_id) VALUES (?, ?, ?)', [titulo, descripcion, idUsuario]);

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
export const  updateNoticia = async (req, res) => {

    try {

        printEncabezado('ACTUALIZANDO UN DATOS DE UNA NOTICIA');

        // ACTUALIZAMOS EL FORO CON SU ID
        const [result] = await pool.query('UPDATE reportes SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ]);

        //verificamos si se encontró el foro
        if (result.affectedRows === 0)
            return res.status(404).json({message: 'NOTICIAS NO ENCONTRADO'})

        res.json(result);

    } catch (error) {

        return res.status(500).json({message: error.message});
        
    }
} 


//?FUNCIÓN PARA ELIMINAR FORO ====================================================================
export const  deleteNoticia = async (req, res) => {

    try {

        // ELIMINAMOS UN FORO POR SU ID
        const [result] = await pool.query('DELETE FROM reportes WHERE id = ?', [req.params.id]);
        
        if( result.affectedRows === 0)
            return res.status(404).json({message: 'Noticias no encontrado'});

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