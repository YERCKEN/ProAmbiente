import { ForosContext } from "../../context/ForosContext";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';

function FormularioForo() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [usuario_id, setUsuario_id] = useState("");
  const [fecha_creacion, setFecha_creacion] = useState("");
  const { createForos } = useContext(ForosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createForos({ titulo, descripcion, usuario_id, fecha_creacion });
    setTitulo("");
    setDescripcion("");
    setUsuario_id("");
    setFecha_creacion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 px-10 mb-4 p-10">
        <h1 className="text-exl font-bold text-white mb-3">Crea tu formulario</h1>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          className="bd-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bd-slate-300 p-3 w-full mb-2"
        ></textarea>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setUsuario_id(e.target.value)}
          value={usuario_id}
          className="bd-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setFecha_creacion(e.target.value)}
          value={fecha_creacion}
          className="bd-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <button className="bg-indigo-500 px-3 py-1 text-white"><Link to="/Foros">guardar</Link></button>
      </form>
    </div>
  );
}

export default FormularioForo;
