{
  type Dog<T> = { name: string, type: T }
  // 普通类型使用
  const dog: Dog<number> = { name: 'ww', type: 20 }

  function identity<T>(arg: T): T {
    return arg;
  }
}