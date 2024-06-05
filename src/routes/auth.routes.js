//IMPORTAMOS EL ENRUTADOR DE EXPRESS
import { Router } from "express";
import { login, register, logout, profile} from "../controllers/auth.controllers.js"
import { authRequired } from "../middlewares/validateToken.js"
//ejecutamos el router
const router = Router();

//RUTAS

//LOGIN ================================================================
router.post('/login', login)

//REGISTER================================================================
router.post('/register', register)

//LOGOUT================================================================
router.post('/logout', logout)

//PROFILE================================================================
router.get('/profile', authRequired, profile)

//EXPORTAMOS
export default router;