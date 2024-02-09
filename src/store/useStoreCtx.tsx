import { useContext } from 'react';
import StoreContext from './storeContext';

export const useStoreCtx = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreCtx must be used within StoreContext.Provider');
  }
  return context;
};
