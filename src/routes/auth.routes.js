//IMPORTAMOS EL ENRUTADOR DE EXPRESS
import { Router } from "express";
import { login, register, logout, profile, verifyToken} from "../controllers/auth.controllers.js"
import { authRequired } from "../middlewares/validateToken.js"
//IMPORTMOS VALIDACIONES
import {loginSchema, registerSchema} from '../validators/auth.schema.js'
import { validateSchema} from '../middlewares/validator.middleware.js'


//ejecutamos el router
const router = Router();

//RUTAS

//LOGIN ================================================================
router.post('/login', validateSchema(loginSchema), login)

//REGISTER================================================================

router.post('/register', validateSchema(registerSchema),register)

router.post('/verify', verifyToken)


//LOGOUT================================================================
router.post('/logout', logout)

//PROFILE================================================================
router.get('/profile', authRequired, profile)

//EXPORTAMOS
export default router;