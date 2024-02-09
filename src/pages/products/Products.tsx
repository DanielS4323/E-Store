import { useEffect } from 'react';
import { useStoreCtx } from '../../store/useStoreCtx';
import storage from '../../utilities/storage';

const Products = () => {
  const { setUser } = useStoreCtx();
  const loggedInUser = storage.getUser();

  return (
    <div style={{ marginTop: 60, height: 'auto' }}>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
