//IMPORTAMOS REACT-ROUTER-DONE
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//IMPORTAMOS LAS PAGES
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'

//importamos el authprovider
import {AuthProvider} from './context/auth.context.jsx'

function App(){
  return (

    //CONTENEDOR DE RUTAS
    <AuthProvider>

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1 className="text-3xl font-bold underline">HOLA BB</h1>}/>

          <Route path='/login' element={<LoginPage />}/>
          
          <Route path='/register' element={<RegisterPage/>}/>

        </Routes>
        
      </BrowserRouter>
      
    </AuthProvider> 

  )
} 

export default App

