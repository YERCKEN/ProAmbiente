import { createContext, useState, useEffect } from "react";
import { foros as data } from "../data/foros";

export const ForosContext = createContext();

export function ForosContextProvider(props) {
  const [foros, setForos] = useState([]);
  function createForos(Foro) {
    setForos([
      ...foros,
      {
        titulo: foro.titulo,
        id: foros.length,
        descripcion: foro.descripcion,
        usuario_id: foro.usuario_id,
        fecha_creacion: foro.fecha_creacion
      },
    ]);
  }
  useEffect(() => {
    setForos(data);
  }, []);

  return (
    <ForosContext.Provider value={{ foros, createForos }}>
      {props.children}
    </ForosContext.Provider>
  );
}
