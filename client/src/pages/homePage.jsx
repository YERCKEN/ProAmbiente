
import Header from './headerPage'
import MenuPage from './MenuPage.jsx'

function HomePage() {

   
  return (
    <div>

        <div className='fixed w-full z-10' >
            <Header/>

        </div>

        <div className=' fixed  left-0 w-[21rem]   z-9  menuPage'>
            <MenuPage />
            
        </div>

        
        <div className='max-w-full  flex '>
            
            <div className='flex justify-center pl-[20rem] pt-[5rem] '>

                
                <div className='w-1/3 flex justify-center mx-10 '>

                <img className='w-full h-full object-contain max-w-full max-h-full' src="public/register.png" alt="" />

                </div>

                <div className='w-1/2 flex justify-center mx-12 text-justify text-[1.1rem] pt-[10rem] flex-wrap'>

                <p className=' w-full h-auto my-2'>
                    <b >Bienvenidos </b>a nuestra plataforma dedicada a fomentar la conciencia ambiental y promover acciones para preservar el medio ambiente en <b>Panamá!</b>, Aquí encontrarás foros para interactuar con otros usuarios, compartir puntos de vista, y aprender sobre las últimas noticias y reportes relacionados con el medio ambiente en nuestro país.
                </p>

                <p className=' w-full h-auto my-2'>
                    <b >Bienvenidos </b>a nuestra plataforma dedicada a fomentar la conciencia ambiental y promover acciones para preservar el medio ambiente en <b>Panamá!</b>, Aquí encontrarás foros para interactuar con otros usuarios, compartir puntos de vista, y aprender sobre las últimas noticias y reportes relacionados con el medio ambiente en nuestro país.
                </p>

                <p className=' w-full h-auto my-2'>
                    <b >Bienvenidos </b>a nuestra plataforma dedicada a fomentar la conciencia ambiental y promover acciones para preservar el medio ambiente en <b>Panamá!</b>, Aquí encontrarás foros para interactuar con otros usuarios, compartir puntos de vista, y aprender sobre las últimas noticias y reportes relacionados con el medio ambiente en nuestro país.
                </p>

                 <p className=' w-full h-auto my-2'>
                    <b >Bienvenidos </b>a nuestra plataforma dedicada a fomentar la conciencia ambiental y promover acciones para preservar el medio ambiente en <b>Panamá!</b>, Aquí encontrarás foros para interactuar con otros usuarios, compartir puntos de vista, y aprender sobre las últimas noticias y reportes relacionados con el medio ambiente en nuestro país.
                </p>
                <p className=' w-full h-auto my-2'>
                    <b >Bienvenidos </b>a nuestra plataforma dedicada a fomentar la conciencia ambiental y promover acciones para preservar el medio ambiente en <b>Panamá!</b>, Aquí encontrarás foros para interactuar con otros usuarios, compartir puntos de vista, y aprender sobre las últimas noticias y reportes relacionados con el medio ambiente en nuestro país.
                </p>
                


                
                </div>
            </div>
           

        </div>

    </div>
  )

}

export default HomePage