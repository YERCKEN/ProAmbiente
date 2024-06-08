import { createContext, useState } from "react";
import { getForosRequest, createForoRequest } from "../api/foros.js";
import PropTypes from "prop-types";


export const ForosContext = createContext();

export function ForosContextProvider({ children }) {
  const [foros, setForos] = useState([]);
  const getForos = async () => {
    try {
      const res = await getForosRequest();
      setForos(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createForos = async (foro) => {
    try {
      const res = await createForoRequest(foro);
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
