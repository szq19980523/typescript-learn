type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type P1 = Parameters<(a: number, b: string) => string>; // [number, string]
export { }