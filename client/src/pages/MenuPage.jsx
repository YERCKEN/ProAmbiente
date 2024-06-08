
import {useAuth} from '../context/useAuth';

export default function MenuPage() {

    const { signout } = useAuth();

    const handleSignout = () => {
        signout();
        // Redirigir a la página de inicio de sesión u otra página
    };


  return (

    <div className='flex justify-center flex-wrap mt-[9rem] h-full   '>

        <button className='w-full text-right p-[1rem] pr-[4rem] btnMenu bg-[#191A18]  font-semibold' onClick={handleSignout}>Cerrar sesión</button>
      
        <button className='w-full  text-right p-[1rem] pr-[4rem] btnMenu  mt-[2rem] font-semibold'>Foros</button>
        <button className='w-full  text-right p-[1rem] pr-[4rem] btnMenu  mt-[2rem]  font-semibold'>Crear Foro</button>


        
        <button className='w-full  text-right p-[1rem] pr-[4rem] btnMenu  mt-[2rem] '>Noticias</button>

        <button className=' flex  w-full text-right p-[1rem] pr-[2rem] btnMenu  mt-[2rem]  '>
          <div className='w-[90%] mr-[1rem]  ' >
          Reportar 
          </div>
          {/* <img src="public/reportar.svg"   className='w-10 h-10 ' alt=""  /> */}
          </button>

    </div>

  )
}
