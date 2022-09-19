interface Obj {
  a: true,
  b: boolean
}

interface Obj1 extends Obj {
  c: string,
  d: '我是小明'
}

const obj: Obj1 = {
  a: true,
  b: false,
  c: 'sss',
  d: '我是小明'
} // true