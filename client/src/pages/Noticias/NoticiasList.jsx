import { useEffect } from "react";
import { useNoticias } from "../../context/useNoticias";
//importar HEADER
import Header from '../headerPage'
import MenuPage from '../MenuPage'
function NoticasList() {

  const { getNoticias, noticias } = useNoticias();

  useEffect(() => {

    getNoticias();

  }, []);

  const formatDate = (dateString) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);

  };
  

  return (
    <div>

      {/* HEADER - ----------------------------------------------------------------------------------- */}
      <div className='fixed w-full z-10' >
            <Header/>
      </div>

      {/* MENÚ  ----------------------------------------------------------------------------------- */}
      <div className=' fixed  left-0 w-[21rem]   z-9  menuPage'>
            <MenuPage />
      </div>


      <div className='max-w-full  flex'>

        <div className=' flex justify-center w-full pl-[20rem] py-[10rem] flex-wrap '>

                <h1 className="w-[90%] text-[#839783] text-end px-[8rem] text-[1.5rem] font-bold italic">Noticias</h1>

                <div className="w-1/3 ">
                  <button  className="btnNuevoForo rounded-xl  w-full text-[#333] text-[2rem] font-extrabold border-[#333] border-[2px] ">+</button>
                </div>

                {noticias.map((noticia) => (

                  <button className=" btnForos bg-[#333] text-white p-[25px] mt-[3rem] w-[50rem] rounded-[10px] rounded-b-none"
                    key={noticia.id}>

                    <div className="flex justify-between items-start">

                    
                        {/* Div del contenido principal (derecha) */}
                        <div className='flex-1'>

                            <div className="flex justify-between">
                              
                              <div className="flex  ">

                                  <img src="public/profile2.png" className="rounded-[10px] w-[40px] h-auto mt-[15px]"/>

                                  <h2 className='text-[#00CC00] ml-[0.5rem] pt-[1.3rem] font-bold'>{noticia.nombreCompleto}</h2>

                                <p className='text-[#839783] ml-[0.5rem] pt-[1.3rem]' >@{noticia.usuario}</p>

                              </div>


                                <p className='text-[#839783]'>{formatDate(noticia.fecha_reporte)}</p>

                            </div>

                            {/* Div del titulo (abajo) */}

                            <div className="flex "> 

                              <h3 className="ml-[3rem] text-[#00CC00] font-semibold " >Título:</h3>
                              <p className="ml-[0.5rem]" >{noticia.titulo}</p>

                            </div>

                        </div>
                      </div>

                      {/* div para la descripción  */}
                      <div className="pt-[10px] ml-[3rem] text-start flex justify-between" >
                        <p>{noticia.descripcion}</p>

                        <div className="flex  justify-end  mt-[1rem] ml-[3rem]">

                          
                        <button className="me-[1rem]">
                              <img src="public/corazonWhite.png" className="w-[1.5rem]" />
                          </button>
                          <button>
                              <img src="public/chat.png" className="w-[1.5rem]" />
                          </button>

                      </div>
                      </div>

                      
                      
                  </button>
                ))}

        </div>


      </div>

    </div>

  );
}

export default NoticasList;


