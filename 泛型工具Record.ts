
interface Person {
  name?: string,
  age?: number,
  hobby?: string[]
}
type Pe = 'key1' | 'key2'
type Record<T extends keyof any, U> = {
  [Key in T]: U
}

const user: Record<Pe, string> = {
  key1: "树哥",
  key2: '334',
} // true 所有类型都被转位string类型

export { }