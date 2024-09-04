interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  mainImage: string;
  manufacturer: string;
  categoryId: string;
  category: {name: string}?;
  inStock: number;
}

interface SingleProductPageProps {
  params: {
    productSlug: string;
  };
}

type ProductInWishlist = {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
  stockAvailabillity: number;
};

interface OtherImages {
  imageID: number;
  productID: number;
  image: string;
}

interface Category {
  id: string;
  name: string;
}

interface User {
  id: string;
  email: string;
  password: string | null;
  role: string;
}

interface Order {
  id: string;
  adress: string;
  apartment: string;
  company: string;
  dateTime: string;
  email: string;
  lastname: string;
  name: string;
  phone: string;
  postalCode: string;
  status: "processing" | "canceled" | "delivered";
  city: string;
  country: string;
  orderNotice: string?;
  total: number;
}

interface SingleProductBtnProps {
  product: Product;
  quantityCount: number;
}


interface Category {
  id: string;
  name: string;
}

interface WishListItem {
  id: string;
  userId: string;
  productId: string;
  product: Product;
}
declare namespace JSX {
  interface IntrinsicElements {
    'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'chat-title': string;
      'agent-id': string;
      'language-code': string;
    };
  }
}
declare module 'react-chartjs-2' {
  import { ChartData, ChartOptions } from 'chart.js';

  export interface ChartProps {
    data: ChartData;
    options?: ChartOptions;
    [key: string]: any;
  }

  export const Bar: React.FC<ChartProps>;
  export const Doughnut: React.FC<ChartProps>;
  export const Line: React.FC<ChartProps>;
  export const Pie: React.FC<ChartProps>;
  export const PolarArea: React.FC<ChartProps>;
  export const Radar: React.FC<ChartProps>;
  export const Scatter: React.FC<ChartProps>;
  export const Bubble: React.FC<ChartProps>;
}