declare class RemoveProduct {
    private store;
    private _id;
    private foodType;
    private credentials;
    constructor(store: string, _id: number, foodType: string, credentials: EmployeeCredential);
    private GetProductObject;
    execute(): Promise<void>;
}
export { RemoveProduct };
