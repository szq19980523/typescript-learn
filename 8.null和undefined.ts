
function fn() {
  // Not much else we can assign to these variables!
  let u: undefined = undefined;
  let n: null = null;
  let c: number = null;
  let f: void = undefined // 编译正确
  let d: void = null // 编译错误
  let s: string = 123;
}
fn()