export declare class RemoveOrder {
    readonly orderId: string;
    constructor(orderId: string);
    execute(): Promise<{
        status: string;
        error?: undefined;
    } | {
        error: unknown;
        status?: undefined;
    }>;
}
