export declare class RemoveOrder {
    readonly orderId: string;
    constructor(orderId: string);
    execute(test?: boolean): Promise<void>;
}
