import ForosCard from "./ForosCard";

import { useContext } from "react";
import { ForosContext } from "../../context/ForosContext";
import { Link } from 'react-router-dom';

function ForosList() {
  const { foros } = useContext(ForosContext);
  if (foros.length === 0) {
    return <h1>no hay tareas aun</h1>;
  }
  return (
    <div>
      {foros.map((foro) => (
        <ForosCard key={foro.id} foro={foro} />
      ))}
      
    <button>
      <Link to="/FormularioForo">Crear Foro</Link>
    </button>
    </div>

    
  );
}

export default ForosList;
