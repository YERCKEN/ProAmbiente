import {useAuth} from '../context/useAuth';
//importamos useNavigate para redirigir a otra página

import { useNavigate, useLocation} from 'react-router-dom';


export default function MenuPage() {
    //importamos funcion para cerrar sesión
    const { signout } = useAuth();
    //Utilizamos useNavigate para redirigir a otra página
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignout = () => {
        signout();
        // Redirigir a la página de inicio de sesión u otra página
    };

    //Función para redirigir a la página de inicio
    const homeRedirect = () => {

        navigate('/');
    }

    //Función para redirigir a la página de inicio
    const forosRedirect = () => {

      navigate('/foros');
  }

  //Función para redirigir a la página de inicio
  const noticiasRedirect = () => {

    navigate('/noticias');
}


  return (

    <div className='flex justify-end flex-wrap mt-[9rem] h-full   '>

        
        
        <button onClick={homeRedirect} className={`w-[15rem] text-right p-[1rem] pr-[4rem] btnMenu  mt-[2rem] font-semibold  ${location.pathname === '/' ? 'btnSelected' : ''}`}
        >Inicio
        </button>

        <button onClick={forosRedirect} className={`w-[15rem] text-right p-[1rem] pr-[4rem] btnMenu  mt-[2rem] font-semibold  ${location.pathname === '/foros' ? 'btnSelected' : ''}`}>Foros</button>

      
        <button onClick={noticiasRedirect} className={`w-[15rem] text-right p-[1rem] pr-[4rem] btnMenu  mt-[2rem] font-semibold  ${location.pathname === '/noticias' ? 'btnSelected' : ''}`}>Noticias</button>

        <button onClick={handleSignout} className='w-full text-right p-[1rem] pr-[4rem] btnMenu bg-[#191A18] mt-[2rem]  font-semibold' >LogOut</button>
    </div>

  )
}
