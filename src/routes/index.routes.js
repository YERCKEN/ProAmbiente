//IMPORTAMOS ROUTER DE EXPRESS: PARA CREAR MÚLTIPLES RUTAS   
import {Router} from "express";

//IMPORTAMOS LA CONEXIÓN DE LA BD
import { pool } from "../db.js";

//EJECUTAMOS ROUTER 
const router = Router()

//HACEMOS UN SELECT BÁSICO A LA BD PARA COMPROBAR QUE FUNCIONA
router.get('/ping', async (req, res) =>{
    const [rows] = await pool.query("SELECT * FROM desarrolladores");
    console.log(rows)
    res.json(rows)
});

//EXPORTAMOS LAS RUTAS
export default router;

