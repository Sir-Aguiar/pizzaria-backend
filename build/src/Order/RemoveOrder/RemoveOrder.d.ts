export declare class RemoveOrder {
    readonly orderId: string;
    readonly passCode: string;
    constructor(orderId: string, passCode: string);
    execute(test?: boolean): Promise<{
        status: string;
        error?: undefined;
    } | {
        error: unknown;
        status?: undefined;
    }>;
}
