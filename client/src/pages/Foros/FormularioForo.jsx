import {useForm } from "react-hook-form";
import { useForos } from "../../context/useForos";
//Impoortamos los datos del usuario
import { useAuth } from "../../context/useAuth"
import {useNavigate} from 'react-router-dom';

//importamos el header y el menú
import Header from "../headerPage";
import Menu from "../MenuPage";

function FormularioForo() {

  const {user} = useAuth()
  const { register, handleSubmit, formState: {errors}} = useForm();
  const { createForos } = useForos();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {

    data.idUsuario=user.id;
    if(createForos(data)) {
        navigate("/Foros");
    }

  });


  return (

      <div>

          {/* HEADER - ----------------------------------------------------------------------------------- */}
          <div className='fixed w-full z-10' >
              <Header/>
          </div>

          {/* MENÚ  ----------------------------------------------------------------------------------- */}
          <div className=' fixed  left-0 w-[21rem]   z-9  menuPage'>
              <Menu />
          </div>

          {/* HOME ----------------------------------------------------------------------------------- */}
          <div className='max-w-full  flex  '>
            
            {/* CONTENEDOR HOME */}
            <div className='flex justify-center w-full pl-[20rem] py-[10rem] flex-wrap'>
                
                <h1 className="w-[90%] text-[#839783] text-end px-[8rem] text-[1.5rem] font-bold italic">Crear Foros</h1>

                <div className="w-[42rem] p-10 rounded-md mt-[2rem]">

                    <form onSubmit={onSubmit}>

                        <input type="text" className={`inputsAuthForms my-4 text-white px-4 py-2 w-full outline-none border-b-[2px] border-[#333333]   ${errors.titulo ? 'border-red-500 placeholder-red' : ''}`}
                            autoFocus
                            placeholder="Titulo"
                            {...register("titulo", { required: true })}
                        />

                        <textarea className={`inputsAuthForms my-4 text-white px-4 py-2 w-full outline-none border-b-[2px] border-[#333333]   ${errors.descripcion ? 'border-red-500 placeholder-red' : ''}`}
                            rows="3"
                            placeholder="Descripcion"
                            {...register("descripcion", { required: true })}
                        ></textarea>

                        <button type="submit" className={`btnSumit px-4 py-2 w-full text-[#00CC00] border-[2px] border-[#00CC00] my-10  ${errors.descripcion  ? 'border-[#EF4444] text-[#EF4444] btnSumitRed' : ''}`} 
                        disabled={errors.descripcion || errors.titulo}
                        
                        >Guardar</button>
                        
                    </form>

                </div>
            </div>
          </div>
      </div>


  );

}

export default FormularioForo;
