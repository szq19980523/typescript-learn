const fns = (x: string | number) => {
  return x
}

type Obj1 = {
  a: string,
  b: number
}

type Obj2 = {
  c: string,
  d: number
}
const obj: Obj1 | Obj2 = {
  a: '123',
  b: 456,
  // f: '124',
  d: 123,
} // true
export { }