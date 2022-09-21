// const num: number | string | number[] = [1,2,3]
// console.log(num.length)
// function fn(a: number | string | number[]) {
//   if (a?.length) {
//     return ''
//   }
// }
let user!: string | number;
console.log((<string>user).toUpperCase()); // 编译正确
// console.log(user.map()); // 错误

let str: any = "to be or not to be";
let strLength: number = (str as string).length;

function onClick(callback?: () => void) {
  callback();		// 参数是可选入参，加了这个感叹号!之后，TS编译不报错
}
onClick()
export { }