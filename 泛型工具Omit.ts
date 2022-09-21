interface Person {
  name: string,
  age: number,
  gender: string
}
// type Omit<T, K extends keyof T> = {
//   [Key in K]: T[K]
// }
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type P1 = Omit<Person, "age" | "gender">
const user: P1 = {
  name: '树哥',
}

export { }