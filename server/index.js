//TODO: BLOQUE DE DEPENDENCIAS, VARIABLES Y CONSTANTES =======================================

//IMPORTAMOS EXPRESS
import express from 'express';
//IMPORTAMOS CONGIGURACIONES
import {PORT, NAME} from './config.js';

//IMPORTAMOS LAS RUTAS DE EXPRESS DE LA CARPETA routes
import indexRoutes from './routes/index.routes.js';
import forosRoutes from './routes/foros.routes.js';


//EJECUTAMOS EXPRESS
const app = express();

//TODO: BLOQUE DE EJECUCIÓN DEL SERVER =======================================================

// DEFINIMOS ESTA SENTENCIA PARA QUE EL BACKEND PUEDA LEER ARCHIVOS JSON
app.use(express.json())

//! USAMOS LAS RUTAS IMPORTADAS
app.use(indexRoutes);
app.use(forosRoutes);

//EJECUTAMOS EL SERVIDOR EM EÑ PORT
app.listen(PORT)
console.log(`SERVER [${NAME}] RUNNING ON PORT ${PORT}`);