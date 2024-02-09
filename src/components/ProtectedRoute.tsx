import { PropsWithChildren, useEffect } from 'react';
import { useStoreCtx } from '../store/useStoreCtx';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authUser } = useStoreCtx();
  const navigate = useNavigate();

  useEffect(() => {
    if(authUser === null) {
        navigate('/login')
    }
  })


  return <div></div>;
};

export default ProtectedRoute;
