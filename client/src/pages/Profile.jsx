//IMPORAMOS EL HEADDER
import Header from './headerPage';
//IMPROAMOS MENI
import MenuPage from './MenuPage.jsx'

//Impoortamos los datos del usuario
import { useAuth } from "../context/useAuth"

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


          <div>

             
          <div className="  max-w-full  flex  justify-center pl-[15rem] pt-[10rem] flex-wrap">

              <div>
                    <h1 className="text-xl font-bold mb-2">Perfil de Usuario</h1>

                    {user ? (
                      <div>
                        <p><strong>Nombre de usuario:</strong> {user.username}</p>
                        <p><strong>Nombre completo:</strong> {user.name}</p>
                        <p><strong>Correo electrónico:</strong> {user.email}</p>
                        <p><strong>Fecha creacion:</strong> {user.CreatedDate}</p>
                        <p><strong>Es experto?:</strong> {user.type}</p>

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