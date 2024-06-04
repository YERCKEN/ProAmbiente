// IMPORTAMOS EL MÓDULO cratePool de mysql2
import {createPool} from 'mysql2/promise'

//EXPORTAMOS LA CONEXIÓN DE LA BD
export const pool = createPool ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'proambiente'
})

