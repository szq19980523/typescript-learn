type NonNullable<T> = T extends keyof null | undefined ? never : T;
type P1 = NonNullable<string | number | undefined>; // string | number
type P2 = NonNullable<string[] | null | undefined>; // string[]
type P3 = NonNullable<string[] | number[] | { a: string } | undefined>; // string[] | number[] | {a: string}

export { }