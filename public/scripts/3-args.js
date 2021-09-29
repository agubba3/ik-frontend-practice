var numArguments = 0;
function get3Args(...arg) {
  numArguments += arguments.length;
  if (numArguments < 3) {
    console.log("not enough arguments");
    return get3Args;
  } else {
    numArguments = 0;
    console.log("done");
  }
}