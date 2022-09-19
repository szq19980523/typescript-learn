const test: number = 10;
(test as unknown as string).split('');  	// 注意，这里和any一样完全可以通过静态检查

const foo: unknown = 'string';
foo.substr(1);   	// Error: 静态检查不通过报错
const bar: any = 10;
bar.substr(1);		// Pass: any类型相当于放弃了静态检查

function test1(input: unknown): number {
  if (Array.isArray(input)) {
    return input.length;    // Pass: 这个代码块中，类型守卫已经将input识别为array类型
  }
  return input.length;      // Error: 这里的input还是unknown类型，静态检查报错。如果入参是any，则会放弃检查直接成功，带来报错风险
}

export { }