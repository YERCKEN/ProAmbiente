// BLOQUE DE DEPENDENCIAS, VARIABLES Y CONSTANTES =======================================

//IMPORTAMOS EXPRESS
import express from 'express';
//IMPORTAMOS CONGIGURACIONES
import {PORT, NAME} from './config.js'

//IMPORTAMOS LAS RUTAS DE EXPRESS DE LA CARPETA routes
import indexRoutes from './routes/index.routes.js'

//EJECUTAMOS EXPRESS
const app = express()

// BLOQUE DE EJECUCIÓN DEL SERVER =======================================================
//USAMOS LAS RUTAS IMPORTADAS
app.use(indexRoutes)

//EJECUTAMOS EL SERVIDOR EM EÑ PORT
app.listen(PORT)
console.log(`SERVER [${NAME}] RUNNING ON PORT ${PORT}`);