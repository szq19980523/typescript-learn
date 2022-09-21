
// interface Person {
//   name: string,
//   age: number,
//   hobby: string[]
// }
type Extract<T, U> = T extends U ? T : never

const user: Extract<'a' | 'b' | 'c', 'a' | 'b' | 'f'> = 'a'//true

export { }