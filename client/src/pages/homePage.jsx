
import Header from './headerPage'
import MenuPage from './MenuPage.jsx'

function HomePage() {

   
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

        {/* HOME ----------------------------------------------------------------------------------- */}
        <div className='max-w-full  flex '>
            
            {/* CONTENEDOR HOME */}

            <div className='flex justify-center pl-[20rem] pt-[15rem] flex-wrap '>

               
                {/* CONTENEDOR IMAGEN */}
                <div className='w-1/3 flex justify-center mx-10 '>

                    <img className='w-full h-full object-contain max-w-full max-h-full' src="public/register.png" alt="" />

                </div>

                {/* CONTENEDOR p */}

                <div className=' w-1/2 flex justify-center mx-12 text-justify text-[1.1rem]  flex-wrap'>

                     {/* TÍTULO */}
                    <div className='w-full  justify-left pt-[2rem] '>
                        <h1 className="text-[1.7rem]"><b className="text-[#00CC00] text-[2rem]">Pro</b>Ambiente</h1>
                    </div>
                    
                     {/* texto */}

                    <p className=' w-full h-auto my-2'>
                        <b >!Bienvenidos </b>a nuestra plataforma dedicada a fomentar la conciencia ambiental y promover acciones para preservar el medio ambiente en <b>Panamá!</b>, Aquí encontrarás foros para interactuar con otros usuarios, compartir puntos de vista, y aprender sobre las últimas noticias y reportes relacionados con el medio ambiente en nuestro país.
                    </p>
                </div>

                
               {/* 
                <div className='w-full  justify-center flex my-[10rem]  flex-wrap'>
                     <img className='w-[50rem] h-auto' src="public/mapa.png" alt="" />
                </div>



                 <div className=' w-full flex justify-left p-12 text-justify text-[1.1rem]  flex-wrap mt-[1rem]'>
                    
                    <div className='px-[1rem]'>

                    
                        <h1 className=' w-full  font-bold  mb-4'>Con nuestra plataforma podrás saber en qué lugares de Panamá se generan reportes y más</h1>


                        <p className='w-full   h-auto my-6  leading-relaxed'>
                        Gracias a nuestra plataforma, tendrás acceso a un mapa interactivo que te permitirá visualizar en tiempo real los lugares de Panamá donde se han reportado incidentes y situaciones relevantes relacionadas con el medio ambiente. 
                        </p>


                        <p className='w-full   h-auto my-6  leading-relaxed'>
                        Podrás ver reportes de eventos actuales, leer noticias verificadas y conocer experiencias y recomendaciones de otros usuarios, todo en un solo lugar. Únete a nuestra comunidad y ayuda a preservar el medio ambiente panameño, contribuyendo con acciones y conocimientos que beneficien a todos.
                        </p>

                    </div>
                    
                
                </div>  */}
                


            </div>
           
        </div>

    </div>
  )

}

export default HomePage