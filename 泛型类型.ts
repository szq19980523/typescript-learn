{
  function identity<T>(arg: T): T {
    return arg;
  }
  let myIdentity: <T>(arg: T) => T = identity;
  const a = myIdentity(12)
}
{
  function identity1<T>(arg: T): T {
    return arg;
  }

  let myIdentity: <U>(arg: U) => U = identity1;
  const a = myIdentity({ a: 1 })
}
{
  function identity2<T>(arg: T): T {
    return arg;
  }

  let myIdentity: { <T>(arg: T): T } = identity2;
  const a = myIdentity('123')
}
{
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }

  function identity3<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn = (arg) => {
    return arg
  };
}