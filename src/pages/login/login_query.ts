import { baseURL } from '../../auth/products';
import { UserResponseProp } from '../../store/types';

type logInProps = { username: string; password: string };

const logInFunction = async ({
  username,
  password,
}: logInProps): Promise<UserResponseProp> => {
  return await fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export default logInFunction;
