import { useContext, useEffect } from "react";
import { useForos } from "../../context/useForos";
import { useAuth } from "../../context/useAuth"

function ForosUser() {

    const {user} = useAuth()
    const { getForos, foros } = useForos();

    useEffect(() => {
      getForos();

    }, []);
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };



    //
    const filteredForos = foros.filter(foro => foro.usuario_id == user.id);

    const totalForos = filteredForos.length;

    console.log("Total de foros del usuario:", totalForos);
  
    return (

      <div>
        {filteredForos.map((foro) => (

              <button className=" btnForos bg-[#333] text-white p-[25px] mt-[3rem] w-full rounded-[10px] rounded-b-none"
                key={foro.id}>

                <div className="flex justify-between items-start">

                
                    {/* Div del contenido principal (derecha) */}
                    <div className='flex-1'>

                        <div className="flex justify-between">
                          
                          <div className="flex  ">

                              <img src="public/profile2.png" className="rounded-[10px] w-[40px] h-auto mt-[15px]"/>

                              <h2 className='text-[#00CC00] ml-[0.5rem] pt-[1.3rem] font-bold'>{foro.usuarios}</h2>

                              <p className='text-[#839783] ml-[0.5rem] pt-[1.3rem]' >@{foro.nombre_usuario}</p>

                          </div>


                            <p className='text-[#839783]'>{formatDate(foro.fecha_creacion)}</p>

                        </div>

                        {/* Div del titulo (abajo) */}

                        <div className="flex "> 

                          <h3 className="ml-[3rem] text-[#00CC00] font-semibold " >Título:</h3>
                          <p className="ml-[0.5rem]" >{foro.titulo}</p>

                        </div>

                    </div>
                  </div>

                  {/* div para la descripción  */}
                  <div className="pt-[10px] ml-[3rem] text-start flex justify-between" >
                    <p>{foro.descripcion}</p>

                    <div className="flex  justify-end  mt-[1rem] ml-[3rem]">

                   {/*    
                    <button className="me-[1rem]">
                          <img src="public/corazonWhite.png" className="w-[1.5rem]" />
                      </button>
                      <button>
                          <img src="public/chat.png" className="w-[1.5rem]" />
                      </button> */}

                  </div>
                  </div>

                  
                  
              </button>
              ))}
      </div>
    );
  }
  
  export default ForosUser;