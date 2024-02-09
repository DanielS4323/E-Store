export type LogInInfo = {
  email: string;
  password: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type UserResponseProp = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  message?: string
};

export type ResponseError = {
  message: string;
};

export type StoreContextType = {
  authUser: UserResponseProp | null;
  error: ResponseError | null;
  setUser: (user: UserResponseProp) => void;
};
