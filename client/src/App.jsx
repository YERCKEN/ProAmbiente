//IMPORTAMOS REACT-ROUTER-DONE
import { BrowserRouter, Route, Routes } from "react-router-dom";
//IMPORTAMOS LAS PAGES
import LoginPage from "./pages/loginPage.jsx";
import RegisterPage from "./pages/registerPage.jsx";
import { ForosContextProvider } from "./context/ForosContext";
import ForosList from "./pages/Foros/ForosList";
import Noticias from "./pages/Noticias/NoticiasList";
import FormularioForo from "./pages/Foros/FormularioForo";
import HomePage from './pages/homePage.jsx'

//importamos el authprovider
import { AuthProvider } from "./context/auth.context.jsx";

function App() {
  return (
    //CONTENEDOR DE RUTAS
    <AuthProvider>
      <ForosContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="/Foros" element={<ForosList />} />

            <Route path="/Noticias" element={<Noticias />} />

            <Route path="/FormularioForo" element={<FormularioForo />} />
          </Routes>
        </BrowserRouter>
      </ForosContextProvider>
    </AuthProvider>
  );
}

export default App;

