// importamos router de express
import { Router } from "express";

//IMPORTAMOS CONTROLADOR
import {getNoticias, getNoticia, createNoticia, updateNoticia, deleteNoticia} from "../controllers/noticias.controllers.js";

//ejecutamos el enrutador
const router = Router();

// RUTA PARA OBTNER TODSO LOS FOROS
router.get('/noticias', getNoticias);

// RUTA PARA OBTNER UN FORO
router.get('/noticias/:id', getNoticia);

// RUTA PARA INSERTAR UN NUEVO FORO
router.post('/noticias', createNoticia);

// RUTA PARA ACTUALIZAR UN NUEVO FORO
router.put('/noticias/:id', updateNoticia);

// RUTA PARA BORRAR UN NUEVO FORO
router.delete('/noticias/:id', deleteNoticia);


//EXPORTAMOS LAS RUTAS
export default router;

