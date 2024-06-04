
//BLOQUE DE DEPENDENCIAS, VARIABLES Y CONSTANTES =======================================i
//IMPORTAMOS el app de express
import app from './app.js'
//IMPORTAMOS CONGIGURACIONES
import {PORT, NAME} from './config.js';


//EJECUTAMOS EL SERVIDOR EM EÑ PORT
app.listen(PORT)
console.log(`SERVER [${NAME}] RUNNING ON PORT ${PORT}`);