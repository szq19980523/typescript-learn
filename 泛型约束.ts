function fill<T>(length: number, value: T[]): T[] {
  console.log(value.length)
  return new Array(length).fill(value);
}

function fill1<T extends { length: number }>(length: number, value: T): T[] {
  console.log(value)
  return new Array(length).fill(value);
}
fill1(1, { a: 1, length: 4 })

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity(3);  // Error, number doesn't have a .length property

loggingIdentity({ length: 10, value: 3 });
export { }