declare interface Locale {
  bairro: string;
  rua: string;
  casa: string;
  reference: string;
}

declare interface Order {
  client: string;
  createdAt: Date;
  location: Locale;
  items: Product[];
  price: number;
  phone: string;
}

declare interface ICreateOrder {
  orderId: number;
  client: string;
  createdAt: Date;
  location: Locale;
  items: Product[];
  price: number;
  phone: string;
}
