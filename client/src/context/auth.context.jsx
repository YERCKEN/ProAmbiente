
import { createContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest, verifyTokenRequest} from '../api/auth.js';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie'; 



export const AuthContext = createContext();



export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    //NEUVO ESTADO PARA SABER SI ESTÁ AUTENTIFICADO
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    //NEUVO ESTADO PARA SABER LOS ERRORES DESDE EL BACKEND
    const [errors, setErrors] = useState([]);

    //ESTADO PARA SABER SI ESTÁ CARGANDO
    const [loading, setLoading] = useState(true)

    //FUNCIÓN PARA EL REGISTRO  - -----------------------------------------------------------------------
    const signup = async (user) =>{

        try {
            const res = await registerRequest(user);
            console.log(res.data)

            //ESTABLECEMOS EL USUARIO
            setUser(res.data)
            setIsAuthenticated(true);
            
            Cookies.set('token', res.data.token, { secure: 'false', sameSite: 'None' });

        } catch (error) {
            
            console.table(error.response.data)
            setErrors(error.response.data)
        }
    };

    //FUNCIÓN PARA EL LOGIN - -----------------------------------------------------------------------

    const signin = async(user)=>{

        try {
            //HACEMOS LA PETICIÓN
            const res = await loginRequest(user);
            console.log(res.data)

            //ESTABLECEMOS EL USUARIO Y AUTENTIFICAMOS
            setIsAuthenticated(true)
            //GUARDAMOS EL USUARIO
            setUser(res.data)
            Cookies.set('token', res.data.token, { secure: 'false', sameSite: 'None' });

        } catch (error) {
            
            console.table(error.response.data)
            setErrors(error.response.data)
        }

    };

    //USE EFFECT PARA limpiar los errores cada 5 segundos
    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            }, 5000)
            return ()=> clearTimeout(timer)
        }
    }, [errors])

    //USE EFFECT PARA SABER SI EL USUARIO ESTÁ AUTENTIFICADO
    useEffect(()=>{
       async function checkLogin (){
        

        const cookies = Cookies.get()
        console.log(cookies)

        if(!cookies.token){
            
            console.log('No hay token')
            setIsAuthenticated(false)
            setLoading(false);

            return setUser(null)
        }
            try {
                console.log(cookies.token)

                //VERIFICAMOS EL TOKEN y pedimos los datos del usuario
                const res =  await verifyTokenRequest(cookies.token)
                //SI NO HAY RESPUESTA
                if(!res.data) {
                    console.log('No hay respuesta')
                    setIsAuthenticated(false)
                    setLoading(false);
                    return;
                }

                //SI HAY RESPUESTA
                setIsAuthenticated(true)
                setUser(res.data)
                //IMRPIMIMOS LOS DATOS DEL USUARIO
                console.log(res.data)
                setLoading(false);

            } catch (error) {
                setIsAuthenticated(false)
                setUser(null) 

                console.log(error)
                setLoading(false);

            }
        
       }

         checkLogin()
    }, []);

// En AuthProvider
    const signout = () => {
        Cookies.remove('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return(

       <AuthContext.Provider value ={{
        signout,
        signup,
        signin,
        user,
        isAuthenticated,
        errors,
        loading
       }}>
            {children}
       </AuthContext.Provider>

    )
}



// Validación de las props
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};