export declare class CreateOrder {
    readonly props: ICreateOrder;
    readonly order_id: string;
    readonly client: string;
    readonly description: string;
    readonly produtos: Item[];
    readonly price: number;
    readonly endereco: Locale;
    readonly data: Date;
    readonly phone: string;
    status: string;
    constructor(props: ICreateOrder, status?: string);
    private generateCredential;
    execute(test?: boolean): Promise<{
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
