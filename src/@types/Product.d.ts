declare interface Product {
  _id: number;
  description: string;
  images: {
    medium: string;
    small: string;
  };
  name: string;
  price: string;
}
declare interface ClientProduct {
  _id: number;
  description: string;
  name: string;
  price: string;
}
declare interface CreateProduct {
  description: string;
  images: {
    medium: string;
    small: string;
  };
  name: string;
  price: string;
}

declare type HeaderArgument = string | string[] | undefined;
declare interface StoreLayout {
  Bebidas: Product[];
  Lanches: Product[];
  Pizzas: Product[];
  Ofertas:Product[]
}
