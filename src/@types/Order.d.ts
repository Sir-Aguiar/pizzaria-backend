declare interface Locale {
  bairro: string;
  address: string;
  casa: string;
  reference: string;
  cep:string;
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
  status: number;
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
