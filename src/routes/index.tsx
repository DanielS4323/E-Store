import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import Products from '../pages/products/Products';
import PageNotFound from '../pages/not_found/PageNotFound';
import { useStoreCtx } from '../store/useStoreCtx';
import Cart from '../pages/cart/Cart';
import { useEffect } from 'react';
import storage from '../utilities/storage';

export const AppRoutes = () => {
  const { authUser, setUser } = useStoreCtx();

  useEffect(() => {
    const loggedInUser = storage.getUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);
  const commonRoutes = [
    { path: '/', element: <Navigate replace to="/home" /> },
    { path: '/home', element: <Products /> },
    { path: '/cart', element: <Cart /> },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ];

  const routes = authUser?.username ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
