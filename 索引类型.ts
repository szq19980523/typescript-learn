interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let mysArray: ReadonlyStringArray = ["Alice", "Bob"];
mysArray[2] = "Mallory"; // error!