import { UserResponseProp } from '../store/types';

const storage = {
  getUser: () => {
    return JSON.parse(window.localStorage.getItem('user') as string);
  },

  setUser: (user: UserResponseProp) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  },

  clearUser: () => {
    window.localStorage.removeItem('user');
  },
};

export default storage;
