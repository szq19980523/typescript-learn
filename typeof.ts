const person = {
  name: 'xiaomign',
  age: 15
}
type Person = typeof person // Person类型为{name: string; age: number}
type Personkey = keyof typeof person // Person类型为 'name' | 'age'
export default {}