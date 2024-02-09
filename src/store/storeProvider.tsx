import { useState } from 'react';
import StoreContext from './storeContext';
import storage from '../utilities/storage';
import {
  type LayoutProps,
  type ResponseError,
  type UserResponseProp,
} from './types';

const StoreContextProvider = ({ children }: LayoutProps) => {
  const [user, setUser] = useState<UserResponseProp | null>(null);
  const [error, setError] = useState<ResponseError | null>(null);

  // const logIn = async ({ email, password }: LogInInfo) => {
  //   return await logInFunction(email, password)
  //     .then((response: UserResponseProp) => {
  //       if (response?.token) {
  //         setUser(response);
  //         storage.setToken(response.token);
  //       }
  //       setError({ message: 'Unexpected Error.' });
  //     })
  //     .catch((err: ResponseError) => {
  //       setError(err);
  //     });
  // };
  const setUserAuth = (user: UserResponseProp) => {
    setUser(user);
    storage.setUser(user);
  };

  const logOutFn = () => {
    setUser(null);
    storage.clearUser();
  };

  const storeCtx = {
    authUser: user,
    setUser: setUserAuth,
    logOut: logOutFn,
  };

  return (
    <StoreContext.Provider value={storeCtx}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
