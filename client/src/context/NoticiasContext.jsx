import { createContext, useState, useEffect, useContext } from "react";
//import { getForosRequest, createForoRequest } from "../api/foros.js";
import PropTypes from "prop-types";

export const NoticiasContext = createContext();

export function NoticiasContextProvider({ children }) {
  const [noticias, setNoticias] = useState([]);
  const getNoticias = async () => {
    try {
      const res = await getNoticiasRequest2();
      setNoticias(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createNoticias = async (noticias) => {
    const res = await createNoticiasRequest(noticias);

    console.log(res);
  };
  {
    /* 
  useEffect(() => {
    setForos(data);
  }, []);
  */
  }
  return (
    <NoticiasContext.Provider value={{ noticias, createNoticias, getNoticias }}>
      {children}
    </NoticiasContext.Provider>
  );
}
// Validación de las props
NoticiasContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
