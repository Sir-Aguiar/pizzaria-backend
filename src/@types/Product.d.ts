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
declare interface CreateProduct {
  description: string;
  images: {
    medium: string;
    small: string;
  };
  name: string;
  price: string;
}
declare interface EmployeeCredential {
  _id: string;
  employee: string;
}
declare interface EmployeeOnDataBase {
  _id: number;
  store: string;
  level: string;
}
declare type HeaderArgument = string | string[] | undefined;
