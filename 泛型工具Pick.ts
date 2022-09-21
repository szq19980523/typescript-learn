
interface Person {
  name: string,
  age: number,
  hobby: string[]
}
type Pe = 'key1' | 'key2'
type Pick<T, U extends keyof T> = {
  [Key in U]: T[U]
}

const user: Pick<Person, 'age' | 'hobby'> = {
  age: 4,
  hobby: ['1']
} // true

export { }