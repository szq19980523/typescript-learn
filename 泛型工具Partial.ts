
interface Person {
  name: string,
  age: number,
  hobby: string[]
}
type Partial<T> = {
  [K in keyof T]?: T[K]
}

const user: Partial<Person> = {
  name: "树哥",
  age: 18,
}

export { }