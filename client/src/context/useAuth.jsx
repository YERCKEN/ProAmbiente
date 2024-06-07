
import { useContext } from 'react';
import { AuthContext } from './auth.context';

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    //VERIFICAMOS SI HAY ERROR
    if(!context){

        throw new Error("useAuth debe estar dentro de un provider");
    }

    return context;
};