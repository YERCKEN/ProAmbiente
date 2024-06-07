
import { createContext, useState} from 'react';
import { registerRequest } from '../api/auth.js';
import PropTypes from 'prop-types';

export const AuthContext = createContext();



export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    //NEUVO ESTADO PARA SABER SI ESTÁ AUTENTIFICADO
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    //NEUVO ESTADO PARA SABER LOS ERRORES DESDE EL BACKEND
    const [errors, setErrors] = useState([]);


    const signup = async (user) =>{

        try {
            const res = await registerRequest(user);
            console.log(res.data)

            //ESTABLECEMOS EL USUARIO
            setUser(res.data)
            setIsAuthenticated(true); 

        } catch (error) {

            setErrors(error.response.data)
        }
    };

    return(

       <AuthContext.Provider value ={{
        signup,
        user,
        isAuthenticated,
        errors
       }}>
            {children}
       </AuthContext.Provider>

    )
}

// Validación de las props
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};