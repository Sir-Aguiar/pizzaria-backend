
declare interface Locale {
  bairro: string;
  rua: string;
  casa: string;
  reference: string;
}

declare interface ICreateOrder {
  order_id: number;
  client: string;
  created_at: Date;
  location: Locale;
  items: Product[];
  price: number;
  phone:string;
}
