
interface Person {
  name?: string,
  age?: number,
  hobby?: string[]
}
type Readonly<T> = {
  readonly [Key in keyof T]: T[Key]
}

const user: Readonly<Person> = {
  name: "树哥",
  age: 18,
  hobby: ["code"]
}
user.age = 12 // false, 因为它是只读属性

export { }