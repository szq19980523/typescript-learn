{
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  // let mySearch: SearchFunc;
  const mySearch: SearchFunc = function (src, sub) {
    let result = src.search(sub);
    return true;
  }
}