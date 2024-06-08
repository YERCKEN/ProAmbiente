import { useContext } from 'react';
import { NoticiasContext } from './NoticiasContext';

export const useNoticias = () => {
    const context = useContext(NoticiasContext)
    if (!context){
      throw new error("NO esta usando el forosContext")
    }
    return context;
  }