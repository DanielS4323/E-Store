import { baseURL } from '../../auth/products';
import { type TData } from '../../store/types';

type TpageParam = {
  pageParam: number;
};

export const getAllProducts = async (pageParam: TpageParam): Promise<TData> => {
  return await fetch(`${baseURL}/products?limit=${pageParam}`).then(
    (response) => response.json(),
  );
};
