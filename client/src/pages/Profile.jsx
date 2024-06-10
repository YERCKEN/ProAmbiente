//IMPORAMOS EL HEADDER
import Header from './headerPage';
//IMPROAMOS MENI
import MenuPage from './MenuPage.jsx'

//Impoortamos los datos del usuario
import { useAuth } from "../context/useAuth"

import ForosUser from './Foros/ForosUser.jsx';

import NavBar from './ActiveOptions.jsx';


import NoticiasUser from './Foros/NoticiasUser.jsx'

import { useState } from 'react';

function Profile (){

    const {user} = useAuth()
    const [activeTab, setActiveTab] = useState('foros');

    console.log('USUARIO DESDE PROFILE')
    console.log(user)

    // Función para formatear la fecha
    const formatDate = (dateString) => {

      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);

    };

    return (

      <div>

        <div className='fixed w-full z-10' >
            <Header/>

        </div>

        <div className=' fixed  left-0 w-[21rem]   z-9  menuPage'>
            <MenuPage />
            
        </div>

          <div className="flex justify-center pl-[20rem] pt-[9rem] flex-wrap">

          <div className="w-100">

              <div className='flex flex-col justify-center items-center'>

                    <h1 className="w-[100%]  text-[#839783] text-end  text-[1.5rem] font-bold italic mb-[2rem]">Perfil de Usuario</h1>
                    {user ? (

                      <div className='flex flex-col justify-center items-center'>

                        <div className='pb-5 w-full md:w-[500px] lg:w-[600px] flex justify-center flex-col items-start'>

                          <div className='flex justify-start w-1/2 mb-[1rem]'>
                            
                            <img className=" w-[2.5rem] h-[2.5rem] mt-[0.5rem]" src="public/profile2.png" alt="" />

                            <div className='flex flex-wrap '>
                              <p className='mt-1 ml-[1rem] text-[#00CC00] font-bold'>{user.name}</p>
                              <p className='w-full mt-1 ml-[1rem] text-[#839783] italic'>@{user.username}</p>
                            </div>

                          </div>

                          <hr className='mt-3 mb-3 w-[100%] border-[#333]'/>

                          <div className='flex flex-row justify-center items-center w-full mb-2'>

                            <div className='w-full flex flex-col justify-center items-center mt-[1rem]'> 

                              <h3 className='mb-[2rem] pl-[2rem] w-full'>Detalles personales</h3>

                              <div className='flex flex-col justify-center items-center w-full'>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] mb-2 p-4 px-[1rem] rounded-t-lg shadow-custom-box'>
                                  <p><strong>Nombre completo</strong></p>
                                  <p className='text-customGreen'>{user.name}</p>
                                </div>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] p-4 rounded-b-lg px-[1rem] shadow-custom-box'>
                                  <p><strong>Tipo de usuario</strong></p>
                                  <p>Miembro de <strong className='text-customGreen'>Pro</strong>Ambiente</p>
                                </div>

                              </div>

                            </div>


                            <div className='flex flex-col justify-center items-center w-full mt-[1rem]'>

                              <h3 className='mb-[2rem] pl-[2rem] w-full '>Detalles de cuenta</h3>

                              <div className='flex flex-col justify-center items-center w-full'>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] mb-2 p-4 rounded-t-lg px-[1rem] shadow-custom-box'>
                                  <p><strong>Correo electrónico</strong></p>
                                  <p className='text-customGreen'>{user.email}</p>
                                </div>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] p-4 rounded-b-lg px-[1rem] shadow-custom-box'>
                                  <p><strong>Se unió desde</strong></p>
                                  <p className='text-customGreen'>{formatDate(user.CreatedDate)}</p>
                                </div>
                                
                                </div>

                            </div>

                          </div>

                        <hr className='mt-3 w-[100%] border-[#333]' />

                        {/* BTN FOROS Y NOTICAS - - --- - - ----- ---------------- */}
                        
                        <NavBar activeTab={activeTab} setActiveTab={setActiveTab}/>

                        </div>

                        <div className="w-[40rem]">

                          {activeTab === 'foros' ? <ForosUser/> : <NoticiasUser/> }
                          
                        </div>

                      </div>

                    ) : (
                      <p>No se ha encontrado información de usuario.</p>
                    )}
              </div>
              
          
          </div>
          </div>
        
           
      </div>

     
    )
 
}

export default Profile