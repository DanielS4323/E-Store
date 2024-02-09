import { baseURL } from '../../auth/products';
import { UserResponseProp } from '../../store/types';

const checkIfLogIn = async (token: string): Promise<UserResponseProp> => {
  return await fetch(`${baseURL}/auth/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => error);
};

export default checkIfLogIn;
