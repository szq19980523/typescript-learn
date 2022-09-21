
// interface Person {
//   name: string,
//   age: number,
//   hobby: string[]
// }
type Excluede<T, U> = T extends U ? never : T

const user: Excluede<'a' | 'b' | 'c', 'a' | 'b'> = 'c' //true

export { }