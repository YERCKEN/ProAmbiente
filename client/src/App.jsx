//IMPORTAMOS REACT-ROUTER-DONE
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//IMPORTAMOS LAS PAGES
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'
import HomePage from './pages/homePage.jsx'

//importamos el authprovider
import {AuthProvider} from './context/auth.context.jsx'

function App(){
  return (

    //CONTENEDOR DE RUTAS
    <AuthProvider>

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>

          <Route path='/login' element={<LoginPage />}/>
          
          <Route path='/register' element={<RegisterPage/>}/>

        </Routes>
        
      </BrowserRouter>
      
    </AuthProvider> 

  )
} 

export default App

