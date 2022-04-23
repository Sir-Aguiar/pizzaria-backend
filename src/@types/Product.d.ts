declare interface Product {
  _id:number;
  description:string;
  images: {
    medium:string;
    small:string;
  }
  name:string;
  price:string;
}
declare interface CreateProduct {
  description:string;
  images: {
    medium:string;
    small:string;
  }
  name:string;
  price:string;
}