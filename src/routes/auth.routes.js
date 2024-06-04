//IMPORTAMOS EL ENRUTADOR DE EXPRESS
import { Router } from "express";
import { login, register } from "../controllers/auth.controllers.js"

//ejecutamos el router
const router = Router();

//RUTAS

//LOGIN ================================================================
router.post('/login', login)

//REGISTER================================================================
router.post('/register', register)


//EXPORTAMOS
export default router;