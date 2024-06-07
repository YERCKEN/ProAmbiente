
import { createContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest } from '../api/auth.js';
import PropTypes from 'prop-types';

export const AuthContext = createContext();



export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    //NEUVO ESTADO PARA SABER SI ESTÁ AUTENTIFICADO
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    //NEUVO ESTADO PARA SABER LOS ERRORES DESDE EL BACKEND
    const [errors, setErrors] = useState([]);

    //FUNCIÓN PARA EL REGISTRO  - -----------------------------------------------------------------------
    const signup = async (user) =>{

        try {
            const res = await registerRequest(user);
            console.log(res.data)

            //ESTABLECEMOS EL USUARIO
            setUser(res.data)
            setIsAuthenticated(true); 

        } catch (error) {
            
            console.table(error.response.data)
            setErrors(error.response.data)
        }
    };

    //FUNCIÓN PARA EL REGISTRO  - -----------------------------------------------------------------------

    const signin = async(user)=>{

        try {
            const res = await loginRequest(user);
            console.log(res.data)
        
        } catch (error) {
            
            console.table(error.response.data)
            setErrors(error.response.data)
        }

    };

    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            }, 5000)
            return ()=> clearTimeout(timer)
        }
    }, [errors])

    return(

       <AuthContext.Provider value ={{
        signup,
        signin,
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