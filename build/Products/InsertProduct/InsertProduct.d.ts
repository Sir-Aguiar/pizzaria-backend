declare class InsertNewProduct {
    private credentials;
    private newProduct;
    private foodType;
    private store;
    constructor(credentials: EmployeeCredential, newProduct: CreateProduct, foodType: string, store: string);
    private IsCredentialsValid;
    insertProduct(): Promise<number>;
}
export { InsertNewProduct };
