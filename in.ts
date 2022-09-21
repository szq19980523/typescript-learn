// 这个类型可以将任何类型的键值转化成number类型
type TypeToNumber<T> = {
  [key in keyof T]: number
}
interface Person {
  [prop: string]: number; //  prop字段必须是 string类型 or number类型。 值是any类型，也就是任意的
}
const person: Person = {
  name: 124,
  age: 16,
  prop: 3423,
  gsda: 43
}
export { }



// const obj: TypeToNumber<Person> = { name: 10, age: 10 }