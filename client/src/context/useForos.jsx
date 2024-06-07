import { useContext } from 'react';
import { ForosContext } from './ForosContext';

export const useForos = () => {
    const context = useContext(ForosContext)
    if (!context){
      throw new error("NO esta usando el forosContext")
    }
    return context;
  }