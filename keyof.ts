type Person = {
  name: string;
  age: number;
}
type Student = keyof Person // Student的类型为 'name' | 'age'

function getValue(p: Person, k: keyof Person) {
  return p[k];  // 如果k不如此定义，则无法以p[k]的代码格式通过编译
}
export { }