type Person = {
  name: string,
  age: number
}
type Stu = {
  scroll: string
}
type Student = Person & Stu
const student: Student = {
  name: '123',
  age: 16,
  scroll: '大河'
}
type A = 'boy' & 'girl' // A的类型为never
export { }