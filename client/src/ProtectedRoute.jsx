import { useAuth } from "./context/useAuth"
import { Navigate, Outlet} from 'react-router-dom';
 function ProtectedRoute() {

  const {loading, isAuthenticated} = useAuth()

    console.log(loading, isAuthenticated)
    //SI ESTAMOS CARGANDO MOSTRAMOS UN LOADING
    if(loading){
        return <h1>Loading...</h1>
    }
  //SI EL USUARIO NO ESTÁ AUTENTIFICADO LO REDIRECCIONAMOS A LA PÁGINA DE LOGIN
    if(!loading &&  !isAuthenticated){
        console.log('No estás autentificado')
        return <Navigate to='/login' replace/>
    }

    //retornamos el componente
    return (
    <Outlet/>
    )
}



export default ProtectedRoute