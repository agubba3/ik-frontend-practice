function curry(base) {
  const totalNumArgs = base.length;
  return function returnFunc(...args) {
    var numArgs = 0;
    var allArgs = [];
    function subFunc(...args) {
      numArgs += args.length;
      allArgs = [...allArgs, ...args];
      if (numArgs == totalNumArgs) {
        return base.apply(null, allArgs)
      } else {
        return subFunc;
      }
    };
    return subFunc(...args);
  }
}

const concat3 = (str1, str2, str3) => {
  return str1 + str2 + str3;
};

const curriedConcat3 = curry(concat3);
console.log(curriedConcat3('foo'));
console.log(curriedConcat3('foo')('bar')('baz'));
console.log(curriedConcat3('foo', 'bar')('baz'));