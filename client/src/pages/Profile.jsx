//IMPORAMOS EL HEADDER
import Header from './headerPage';
//IMPROAMOS MENI
import MenuPage from './MenuPage.jsx'

//Impoortamos los datos del usuario
import { useAuth } from "../context/useAuth"

import ForosUser from './Foros/ForosUser.jsx';


function Profile (){

    const {user} = useAuth()

    console.log('USUARIO DESDE PROFILE')
    console.log(user)
  
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


                    <h1 className="text-xl font-bold mb-2 pb-5">Perfil de Usuario</h1>

                    {user ? (

                      <div className='flex flex-col justify-center items-center'>

                        <div className='pb-5 w-full md:w-[500px] lg:w-[600px] flex justify-center flex-col items-start'>

                          <div className='flex flex-col justify-start items-start'>
                            <img className=" w-[2.1rem]" src="public/profile.png" alt="" />
                            <p className='mt-2'>{user.username}</p>
                          </div>

                          <hr className='mt-3 mb-3 w-[100%]'/>

                          <div className='flex flex-row justify-center items-center w-full mb-2'>

                            <div className='w-full flex flex-col justify-center items-center'> 

                              <h3 className='mb-2'>Detalles personales</h3>

                              <div className='flex flex-col justify-center items-center w-full'>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] mb-2 p-2 rounded-t-lg'>
                                  <p><strong>Nombre completo</strong></p>
                                  <p className='text-customGreen'>{user.name}</p>
                                </div>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] p-2 rounded-b-lg'>
                                  <p><strong>Tipo de usuario</strong></p>
                                  <p>Miembro de <strong className='text-customGreen'>Pro</strong>Ambiente</p>
                                </div>

                              </div>

                            </div>


                            <div className='flex flex-col justify-center items-center w-full'>

                              <h3 className='mb-2'>Detalles de cuenta</h3>

                              <div className='flex flex-col justify-center items-center w-full'>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] mb-2 p-2 rounded-t-lg'>
                                  <p><strong>Correo electrónico</strong></p>
                                  <p className='text-customGreen'>{user.email}</p>
                                </div>

                                <div className='flex flex-col justify-center items-start bg-[#333333] w-[80%] p-2 rounded-b-lg'>
                                  <p><strong>Se unió desde</strong></p>
                                  <p className='text-customGreen'>{user.CreatedDate}</p>
                                </div>
                                
                                </div>

                            </div>

                          </div>

                        <hr className='mt-3 w-[100%]' />

                        <div className='flex flex-row justify-start items-start pl-2 mt-3'>
                          <a href="">Foros</a>
                          <a href="" className='pl-3'>Noticias</a>
                        </div>


                        </div>

                        <div className="w-full md:w-[800px] lg:w-[900px]">
                          <ForosUser />
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