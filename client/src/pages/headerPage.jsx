
import { useNavigate, useLocation} from 'react-router-dom';
import { useAuth } from "../context/useAuth"


function Header(){
    // Hook para redireccionar a la página de login
    const navigate = useNavigate();
    const location = useLocation();

    //importamos el hook useAuth para saber si hay que mostrar el botón de perfil o no
    const {user} = useAuth()
    
    if(!user){
        console.log('HEADER: NO HAY USUARIO')
    }

    // Función para redireccionar a la página de login
    const loginRedirect = () => {
        navigate('/login');

    }

    const profileRedirect = () => {
        navigate('/profile');
    }

    const registerRedirect = () => {
        navigate('/register');
    }

    const homeRedirect = () => {
        navigate('/');
    }


    return(
        
        <div className="w-full px-[8rem] py-5 shadow-2xl flex justify-between bg-[#191A18]">

            {/* LOGO PROAMBIENTE */}
            
            <button onClick={homeRedirect} className='flex'>

                <img className="w-[2rem] h-[2rem]" src="public/tree.png" alt="" />
                <h1 className="ml-[0.3rem] mt-[0.4rem] text-[1.2rem]"><b className="text-[#00CC00] text-[1.3rem]">Pro</b>Ambiente</h1>

            </button>
     



            {/* ocultar botones login y regisro si está inciiado sesion */}
     
            {!user && location.pathname !== '/login'&&(

                <div className='flex'>
                            
                    <input type="text"  className=' inputHeader text-white px-4 py-2 w-[30rem] outline-none border-b-[2px] border-[#333]  bg-[#191A18] rounded-xl rounded-b-none '/>
                  
                    {/* BOTONES LOGIN Y REGISTRO */}
                    <button onClick={loginRedirect} className="btnLogin px-[1.5rem] py-[0.2rem] text-[#191A18] border-[#00CC00] rounded-md border-[2px] ml-[2rem]  bg-[#00CC00]">
                        LogIn
                    </button>

                    <button onClick={registerRedirect} className="btnRegistro  px-[1.5rem] py-[0.2rem]  border-[2px] rounded-md bg-[#333]  text-white ml-[1rem]">
                        SingUp
                    </button>
                    

                    {/* PERFIL -  - - ------    ------ ---- -  - - - - - - -- --- -   -  - -  -  -  - -} */}
                    
                
                    {user && (
             
                     
                        <button onClick={profileRedirect}>
                        <img className="btnProfile w-[2.1rem] ml-[1rem]" src="public/profile.png" alt="" />
                        
                        </button>

       
                        
                    
                    )}

             
                </div>
            )}

            {/* SI HAY USUARIO RENDERIZO EL PERFIL -  - - ------    ------ ---- -  - - - - - - --  -} */}
            
            {user && (
                <button onClick={profileRedirect} className=' btnProfile flex'>

                    <img className=" w-[2.1rem] ml-[1rem]" src="public/profile.png" alt="" />
                    <h1 className='text-white ml-[0.9rem] pt-[0.2rem] '>{user.username}</h1>
                </button>
            )}

           


        </div>
    )
}

export default Header;