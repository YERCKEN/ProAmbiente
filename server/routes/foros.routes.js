// importamos router de express
import { Router } from "express";

//IMPORTAMOS CONTROLADOR
import {getForos, getForo, createForo, updateForo, deleteForo  } from "../controllers/foros.controllers.js";

//ejecutamos el enrutador
const router = Router();

// RUTA PARA OBTNER TODSO LOS FOROS
router.get('/foros', getForos);

// RUTA PARA OBTNER UN FORO
router.get('/foros/:id', getForo);

// RUTA PARA INSERTAR UN NUEVO FORO
router.post('/foros', createForo);

// RUTA PARA ACTUALIZAR UN NUEVO FORO
router.put('/foros/:id', updateForo);

// RUTA PARA BORRAR UN NUEVO FORO
router.delete('/foros/:id', deleteForo);


//EXPORTAMOS LAS RUTAS
export default router;

