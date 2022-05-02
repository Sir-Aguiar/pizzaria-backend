declare class CreateOrder implements ICreateOrder {
    readonly client: string;
    readonly location: Locale;
    readonly items: ClientProduct[];
    readonly price: number;
    readonly phone: string;
    readonly createdAt: Date;
    readonly orderId: number;
    readonly OrderDoc: Order;
    constructor(client: string, location: Locale, items: ClientProduct[], price: number, phone: string);
    private checkCredentials;
    private setCredentials;
    execute(): Promise<{
        status: boolean;
        credentials: {
            passCode: number;
            client: string;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: unknown;
        credentials?: undefined;
    }>;
}
export { CreateOrder };
