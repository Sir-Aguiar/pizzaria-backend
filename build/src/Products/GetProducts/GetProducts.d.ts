declare const getProducts: (org: string) => Promise<import("@firebase/firestore").DocumentData | undefined>;
export { getProducts };
