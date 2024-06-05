
//IMPORTAMOS EXPRESS
import express from 'express';
//IMPORTAMOS MORGAN y lo configuramos
import morgan  from 'morgan';
import cookieParser from 'cookie-parser'


//IMPORTAMOS LAS RUTAS DE EXPRESS DE LA CARPETA routes
import indexRoutes from './routes/index.routes.js';
import forosRoutes from './routes/foros.routes.js';
import authRoutes from './routes/auth.routes.js';


//EJECUTAMOS EXPRESS
const app = express();

app.use(morgan('dev'));


//BLOQUE DE EJECUCIÓN DEL SERVER =======================================================

// DEFINIMOS ESTA SENTENCIA PARA QUE EL BACKEND PUEDA LEER ARCHIVOS JSON
app.use(express.json());
app.use(cookieParser());

//USAMOS LAS RUTAS IMPORTADAS
app.use(indexRoutes);
app.use(forosRoutes);
app.use('/api', authRoutes);




//EXPORTMAOS EL APPP
export default app;