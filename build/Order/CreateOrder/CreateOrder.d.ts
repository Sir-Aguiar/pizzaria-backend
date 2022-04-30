declare class CreateOrder implements ICreateOrder {
    readonly client: string;
    readonly location: Locale;
    readonly items: Product[];
    readonly price: number;
    readonly phone: string;
    readonly createdAt: Date;
    readonly orderId: number;
    constructor(client: string, location: Locale, items: Product[], price: number, phone: string);
    private setCredentials;
    private execute;
}
export { CreateOrder };
