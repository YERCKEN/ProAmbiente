import {useForm} from 'react-hook-form';
import {useAuth} from '../context/useAuth'
import {Link, useNavigate} from 'react-router-dom'

import Header from './headerPage';

function LoginPage(){

    // FORMULARIO 
    const {register, handleSubmit, formState: {errors}} = useForm();

    //usAuth
    const {signin, errors: signinErrors = []} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) =>{

      signin(data)
      .then(() => {
        navigate('/profile')
      })
    });

    return (
        
        <div>
            <Header />

            <div className='max-w-full p-10 mt-[2rem] flex justify-center'>


            <div className='w-1/3 flex justify-center mx-10'>
              <img src="public/register2.png" className='w-full h-full object-contain max-w-full max-h-full' />
            </div>

            <div className='w-1/3 flex justify-center mx-12 mt-9'>

              
              <form onSubmit={onSubmit} className='w-full'>

              <h1 className='titulo w-full text-left'>Login</h1>

                  {
                  signinErrors.map((error, i) =>(
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



                <input type="password" 
                  {...register('password', { required: true })}
                  className={`inputsAuthForms my-4 text-white px-4 py-2 w-full outline-none border-b-[2px] border-[#333333]  ${errors.password ? 'border-red-500 placeholder-red' : ''}`}
                  autoComplete="off"
                  placeholder={errors.password ? 'El password es requerido' : 'password'}
                />


                <button type="submit" className={`btnSumit px-4 py-2 w-full text-[#00CC00] border-[2px] border-[#00CC00] my-10
                  
                  ${errors.password || errors.username ? 'border-[#EF4444] text-[#EF4444] btnSumitRed' : ''}
                  `}
                  disabled={errors.password || errors.username}
                  
                  >
                  
                  Login
                </button>

                <p className='w-full text-[#839783]'>
                  No tienes cuenta? <Link className="linkHover" to='/register'>Regístrate</Link>
                </p>
              </form>

              
            </div>

            </div>
        </div>

        
            
    )
}

export default LoginPage