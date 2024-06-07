 import {useForm} from 'react-hook-form';
//inportamos las peticiones al backend
import {useAuth} from '../context/useAuth'
import { useEffect } from 'react';
//IMPORTAMOS PARA REDIRECCIOANAR
import { useNavigate, Link} from 'react-router-dom';


import Header from './headerPage';

function RegisterPage(){

    //función que sirve para registrar inputs
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {signup, user, isAuthenticated, errors: registerErrors} = useAuth()
    const navigate = useNavigate();
    console.log(user);

    //USE EFFECT
    useEffect(()=>{
      if(isAuthenticated) navigate('/')
    }, [isAuthenticated ,navigate])

    //Función para realizar la petición de registro
    const onSubmit = handleSubmit( async (values)=>{
       signup(values);
    });

    return (
        
        <div>

            <Header />

            <div className='max-w-full p-10 flex justify-center wrap'>
                    
                      
                  
                

                <div className='w-1/3 flex justify-center mx-10'>

                {errors.password || errors.username || errors.name || errors.email ? (
                    <img
                      src="public/register2RED.png"
                      className='w-full h-full object-contain max-w-full max-h-full'
                      alt="Error"
                    />
                  ) : (
                    <img
                      src="public/register2.png"
                      className='w-full h-full object-contain max-w-full max-h-full'
                      alt="Correcto"
                    />
                  )}
                </div>

                <div className='w-1/3 flex justify-center mx-12'>

                  
                  <form onSubmit={onSubmit} className='w-full'>

                  <h1 className='titulo w-full text-left'>Regístrate</h1>

                    {
                      registerErrors.map((error, i) =>(
                        <div className=' p-2 text-red-500 border-white text-left w-full'  key={i}>
                          {error}
                        </div>
                      ))
                    }

                    
                
                    <input type="text" 
                      {...register('username', { required: true })}
                      className={`inputsAuthForms my-4 text-white px-4 py-2 w-full outline-none border-b-[2px] border-[#333333]  ${errors.username ? 'border-red-500 placeholder-red' : ''}`}
                      autoComplete="off"
                      placeholder={errors.username ? 'Username requerido' : 'Username'}
                    />

                
                    <input type="text" 
                      {...register('name', { required: true })}
                      className={`inputsAuthForms my-4 text-white px-4 py-2 w-full outline-none border-b-[2px] border-[#333333]  ${errors.name ? 'border-red-500 placeholder-red' : ''}`}
                      autoComplete="off"
                      placeholder={errors.name ? 'El nombre es requerido' : 'Dilan Sobenis'}
                    />

              

                    <input type="email" 
                      {...register('email', { required: true })}
                      className={`inputsAuthForms my-4 text-white px-4 py-2 w-full outline-none border-b-[2px] border-[#333333]  ${errors.email ? 'border-red-500 placeholder-red' : ''}`}
                      autoComplete="off"
                      placeholder={errors.name ? 'El email es requerido' : 'example@correo.com'}
                    />



                    <input type="password" 
                      {...register('password', { required: true })}
                      className={`inputsAuthForms my-4 text-white px-4 py-2 w-full outline-none border-b-[2px] border-[#333333]  ${errors.password ? 'border-red-500 placeholder-red' : ''}`}
                      autoComplete="off"
                      placeholder={errors.password ? 'El password es requerido' : 'password'}
                    />


                    <button type="submit" className={`btnSumit px-4 py-2 w-full text-[#00CC00] border-[2px] border-[#00CC00] my-10
                      
                      ${errors.password || errors.username || errors.name || errors.email? 'border-red-500 text-red-500 btnSumitRed' : ''}
                      `}
                      disabled={errors.password || errors.username || errors.name || errors.email }
                      
                      >
                      
                      Register
                    </button>
                      
                    <p className='w-full text-[#839783]'>
                      Ya tienes cuenta? <Link className="linkHover" to='/login'>Login</Link>
                    </p>
                  </form>
                </div>
              </div>
        </div>
       
      );
      
}
export default RegisterPage