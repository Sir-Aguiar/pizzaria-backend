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
declare interface IOrder {
  id: string;
  client: string;
  description: string;
  price: number;
  created_at: date;
  items: Item[];
  location: Locale;
}
declare interface OrderDTO {
  id: string;
  client: string;
  description: string;
  price: number;
  created_at: date;
  items: Item[];
  location: Locale;
}
