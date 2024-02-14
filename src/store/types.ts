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
  message?: string;
};

export type ResponseError = {
  message: string;
};

export type StoreContextType = {
  authUser: UserResponseProp | null;
  error: ResponseError | null;
  setUser: (user: UserResponseProp) => void;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductList = {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
};
