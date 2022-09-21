{
  type Dog<T> = { name: string, type: T }

  function adopt<T>(dog: Dog<T>) { return dog };

  const dog = { name: 'ww', type: 'hsq' };  // 这里按照Dog类型的定义一个type为string的对象
  adopt(dog);  // Pass: 函数会根据入参类型推断出type为string
}
{
  type Dog<T = any> = { name: string, type: T }
  const dog: Dog = { name: 'ww', type: 'hsq' }
  dog.type = 123;    // 不过这样type类型就是any了，无法自动推导出来，失去了泛型的意义

}
