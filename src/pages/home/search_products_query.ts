import { baseURL } from '../../auth/products';

export const searchProducts = async (queryKey = '') => {
  return await fetch(`${baseURL}/products/search?q=${queryKey}`).then(
    (response) => response.json(),
  );
};
