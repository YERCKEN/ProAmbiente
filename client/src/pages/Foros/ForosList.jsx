import ForosCard from "./ForosCard";

import { useContext, useEffect } from "react";
import { ForosContext } from "../../context/ForosContext";
import { Link } from "react-router-dom";
import { useForos } from "../../context/useForos";

function ForosList() {
  const { getForos, foros } = useForos();
  useEffect(() => {
    getForos();
  }, []);

  return (
    <div>
      {foros.map((foro) => (
        <div key={foro.id}>
          <h1>{foro.titulo}</h1>
          <p>{foro.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default ForosList;
/*

----------------------------------------------------
{foros.map((foro) => (
        <ForosCard key={foro.id} foro={foro} />
      ))}

      <button>
        <Link to="/FormularioForo">Crear Foro</Link>
      </button> */
