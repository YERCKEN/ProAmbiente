
function Header(){
    return(
        
        <div className="w-full px-[8rem] py-5 shadow-2xl flex justify-between bg-[#191A18]">


            {/* LOGO PROAMBIENTE */}

            <div className='flex'>
                <img className="w-[2rem] h-[2rem]" src="public/tree.png" alt="" />
                <h1 className="ml-[0.3rem] mt-[0.4rem] text-[1.2rem]"><b className="text-[#00CC00] text-[1.3rem]">Pro</b>Ambiente</h1>
            </div>

            {/* BOTONES LOGIN Y REGISTRO */}

            <div className='flex'>
                <button className="btnLogin
                 px-[1.5rem] py-[0.2rem] 
                 text-[#191A18] border-[#00CC00] 
                 rounded-md border-[2px]   
                 ml-[2rem] 
                 bg-[#00CC00]">
                    LogIn
                </button>

                <button 

                className="btnRegistro 
                px-[1.5rem] py-[0.2rem] 
                border-[2px]
                rounded-md bg-[#333]
                text-white
                ml-[1rem]">SingUp
                
                </button>

                {/* PERFIL -  - - ------    ------ ---- -  - - - - - - -- --- -   -  - -  -  -  - -} */}
                <button>
                    <img className="btnProfile  w-[2.1rem] ml-[1rem]" src="public/profile.png" alt="" />
                </button>

            </div>

           


        </div>
    )
}

export default Header;