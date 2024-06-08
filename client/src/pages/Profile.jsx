//Perfil de usuario

import { useAuth } from "../context/useAuth"

function Profile (){

    const {user} = useAuth()

    console.log('USUARIO DESDE PROFILE')
    console.log(user)
  
    return (
      <div className="p-4 bg-[#333] rounded shadow">
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
    )
 
}

export default Profile