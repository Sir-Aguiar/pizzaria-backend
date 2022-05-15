declare class InsertNewProduct {
    private credentials;
    private newProduct;
    private foodType;
    private store;
    constructor(credentials: EmployeeCredential, newProduct: CreateProduct, foodType: string, store: string);
    insertProduct(): Promise<number>;
}
export { InsertNewProduct };
