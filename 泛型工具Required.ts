
interface Person {
  name?: string,
  age?: number,
  hobby?: string[]
}
type Required<T> = {
  [Key in keyof T]-?: T[Key]
}

const user: Required<Person> = {
  name: "树哥",
  age: 18,
  hobby: ["code"]
}

export { }