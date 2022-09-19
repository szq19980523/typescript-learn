function err(): never {
  throw new Error('baocuo')
}

function foo() { let count = 1; while (count) { count++; } }

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

type language = never | 'ts'   // language的类型还是'ts'类型

type human = 'boy' & 'girl' // 这两个单独的字符串类型并不可能相交，故human为never类型

function test() {
  foo();  		// 这里的foo指上面返回never的函数
  console.log(111); 	// Error: 编译器报错，此行代码永远不会执行到
}
let n: never;
let o: any = {};
n = o;  // Error: 不能把一个非never类型赋值给never类型，包括any