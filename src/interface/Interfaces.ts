export interface RouteTransitionProps {
  children: React.ReactNode;
}

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FeatureCardProps {
  img: string;
  alt: string;
  bgcolor: string;
  txtcolor: string;
  title: string;
  animation: string;
}

export interface CartCounterState {
  value: number;
}

export interface Product {
  id: number;
  img: string;
  alt: string;
  category: string;
  title: string;
  price: number;
  animation: string;
}

export interface CartState {
  products: Product[];
}

export interface shippingFormik {
  email: string;
  phone: number | string;
  firstName: string;
  lastName: string;
  address: string;
  appartment: string;
  city: string;
  state: string;
}

export interface AddProductProps {
  img: string;
  img1: string;
  img2: string;
  img3: string;
  title: string;
  category: string;
  description: string;
  price: number;
}
