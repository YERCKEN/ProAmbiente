import { useForm } from "react-hook-form";
import { useNoticias } from "../../context/useNoticias";
//Impoortamos los datos del usuario
import { useAuth } from "../../context/useAuth";

function FormularioNoticias() {
  const { user } = useAuth();
  console.log("USUARIO DESDE PROFILE");
  console.log(user.id);
  const { register, handleSubmit } = useForm();
  const { createNoticias } = useNoticias();
  const onSubmit = handleSubmit((data) => {
    data.idUsuario = user.id;
    createNoticias(data);
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("titulo")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("descripcion")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default FormularioNoticias;
