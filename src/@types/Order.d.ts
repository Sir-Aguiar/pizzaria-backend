declare interface Item {
  product_id: string;
  name: string;
  price: number;
  description: string;
}

declare interface Locale {
  bairro: string;
  rua: string;
  casa: string;
  quadra?: string;
  reference: string;
}

declare interface ICreateOrder {
  order_id: string;
  client: string;
  description: string;
  created_at: Date;
  location: Locale;
  items: Item[];
  price: number;
  phone:string;
}
