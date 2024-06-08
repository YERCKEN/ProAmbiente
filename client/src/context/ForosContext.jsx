import { createContext, useState, useEffect, useContext } from "react";

//import { getForosRequest, createForoRequest } from "../api/foros.js";
import { getForosRequest2, createForoRequest2 } from "../api/auth.js";
import PropTypes from "prop-types";


import { getForosRequest, createForoRequest } from "../api/foros.js";
import { getForosRequest2 } from "../api/auth.js";
import PropTypes from 'prop-types';


export const ForosContext = createContext();

export function ForosContextProvider({ children }) {
  const [foros, setForos] = useState([]);
  const getForos = async () => {
    try {
      const res = await getForosRequest2();
      setForos(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createForos = async (foro) => {
    try {
      const res = await createForoRequest2(foro);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  {
    /* 
  useEffect(() => {
    setForos(data);
  }, []);
  */
  }
  return (
    <ForosContext.Provider value={{ foros, createForos, getForos }}>
      {children}
    </ForosContext.Provider>
  );
}
// Validación de las props
ForosContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
