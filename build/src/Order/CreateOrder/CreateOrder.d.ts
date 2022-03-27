export declare class CreateOrder {
    readonly props: ICreateOrder;
    readonly order_id: string;
    readonly client: string;
    readonly description: string;
    readonly produtos: Item[];
    readonly price: number;
    readonly endereco: Locale;
    readonly data: Date;
    constructor(props: ICreateOrder);
    execute(test?: boolean): Promise<unknown>;
}
