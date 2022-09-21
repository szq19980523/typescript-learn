// 函数声明
function fn(x: number, y: number): number {
  return x + y
}

// 函数表达式
const fnn = (x: string, y: string): string => {
  return x + y
}

// 可选参数
function fn1(x?: number, y?: number): number {
  return x + y
} // true

function fn2(x?: number, y: number): number {
  return x + y
} // false 必须参数不能位于可选参数后

function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x, y) {
  return x + y;
}
const res = add("1", "2") // res1类型为string
const res1 = add(1, 2) // res1类型为number
const res2 = add('1', 2) // false 没有与此调用匹配的重载
