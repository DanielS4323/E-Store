import { createContext } from 'react';
import { StoreContextType } from './types';

const StoreContext = createContext<StoreContextType | null>(null);

export default StoreContext;
