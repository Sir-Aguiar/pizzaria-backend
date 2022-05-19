declare class CreateOrder implements ICreateOrder {
    readonly client: string;
    readonly location: Locale;
    readonly items: ClientProduct[];
    readonly phone: string;
    readonly payment: string;
    readonly createdAt: Date;
    readonly orderId: number;
    readonly OrderDoc: Order;
    price: number;
    constructor(client: string, location: Locale, items: ClientProduct[], phone: string, payment: string);
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
