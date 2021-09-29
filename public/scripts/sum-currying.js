function sumIterative(arg) {
  var sum = 0;
  function inside(arg) {
    if (arguments.length === 0) {
      return sum;
    } else {
      sum += arg;
      return inside;
    }
  }
  return inside(arg);
}
console.log(sumIterative(10)(20)(3)(4)());

let sumRecursive = a => b => b ? sumRecursive(a + b) : a;
console.log(sumRecursive(10)(20)(3)(4)());


