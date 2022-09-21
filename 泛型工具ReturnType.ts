type Func2 = (value: string) => string;
type ReturnType<T extends (...angs: any) => any> = T extends (...angs: any) => infer R ? R : any;
type off = ReturnType<Func2>
const test: ReturnType<Func2> = '23';
export { }