export declare const ValidateEmployee: (id: number) => Promise<{
    status: boolean;
    employee?: undefined;
} | {
    status: boolean;
    employee: import("@firebase/firestore").DocumentData;
}>;
