type Test = number
type Foo<T> = T extends { t: infer Test, a: infer Abc } ? Test : string
type One = Foo<number>  // string，因为number不是一个包含t的对象类型
type Two = Foo<{ t: boolean }>  // boolean，因为泛型参数匹配上了，使用了infer对应的type
type Three = Foo<{ a: number, t: () => void }> // () => void，泛型定义是参数的子集，同样适配


export { }