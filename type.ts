type Str = number;
const str: Str = '1234' // 不能将类型分配给number

type Obj = {
  a: boolean,
  b: number
};
const obj: Obj = {
  a: true,
  b: 1
} // true
export { }