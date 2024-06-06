//IMPORTAMOS REACT-ROUTER-DONE
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App(){
  return (

    //CONTENEDOR DE RUTAS
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<h1 className="text-3xl font-bold underline">HOLA BB</h1>}/>
         <Route path='/login' element={<h1 className="text-3xl font-bold">LOGIN</h1>}/>
         <Route path='/register' element={<h1 className="text-3xl font-bold">REGISTRO</h1>}/>
      </Routes>
      
    </BrowserRouter>

  )
} 

export default App

