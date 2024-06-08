
import Header from './headerPage'
import {useAuth} from '../context/useAuth';

function HomePage() {

    const { signout } = useAuth();

    const handleSignout = () => {
        signout();
        // Redirigir a la página de inicio de sesión u otra página
    };

  return (
    <div>
        <Header />

        <div className='border-[2px] flex justify-center flex-wrap max-w-[15rem]'>

            <button className='w-full  text-left p-[1rem] bg-red-500' onClick={handleSignout}>Cerrar sesión</button>
            

            <h2 className='text-left w-full'>Foros</h2>

            <button className='w-full  text-left p-[1rem]'>Foros</button>
            <button className='w-full  text-left p-[1rem]'>Crear Foro</button>


            <h2 className='text-left w-full'>Noticias</h2>
            
            <button className='w-full  text-left p-[1rem]'>Noticias</button>
            <button className='w-full text-left p-[1rem]'>Reportar</button>

        </div>

        <div className='max-w-full p-10 flex justify-center wrap'>

            
            <div className='w-1/3 flex justify-center mx-10'>

                <img className='w-full h-full object-contain max-w-full max-h-full' src="public/register.png" alt="" />
                
            </div>
            
            <div className='w-1/2 flex justify-center mx-12 text-justify text-[1.1rem] pt-[10rem] flex-wrap'>

                <p className=' w-full h-auto my-2'>
                    <b >Bienvenidos </b>a nuestra plataforma dedicada a fomentar la conciencia ambiental y promover acciones para preservar el medio ambiente en <b>Panamá!</b>, Aquí encontrarás foros para interactuar con otros usuarios, compartir puntos de vista, y aprender sobre las últimas noticias y reportes relacionados con el medio ambiente en nuestro país.
                </p>

                

            
            </div>

        </div>

    </div>
  )

}

export default HomePage