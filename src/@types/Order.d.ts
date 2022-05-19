declare interface Locale {
  bairro: string;
  rua: string;
  casa: string;
  reference: string;
}

declare interface OrderBody {
  client: string;
  location: Locale;
  items: ClientProduct[];
  price: number;
  phone: string;
}

declare interface Order {
  client: string;
  createdAt: Date;
  location: Locale;
  items: ClientProduct[];
  price: number;
  phone: string;
  payment: string;
}

declare interface ICreateOrder {
  orderId: number;
  client: string;
  createdAt: Date;
  location: Locale;
  items: ClientProduct[];
  price: number;
  phone: string;
  payment: string;
}
