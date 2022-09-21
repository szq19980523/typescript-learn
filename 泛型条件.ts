interface Type {
  <T extends string>(args: T, key: string): string
}
const fn: Type = (args, key) => {
  return '123'
}
fn('123', '345')
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise?T : never>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
const Fn = loggingIdentity('avc')
export { }