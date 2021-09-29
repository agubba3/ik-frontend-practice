const standardNodeFn = (arg1, arg2, callback) => {
  // ... does stuff
  const timeout = 3000;
  setTimeout(() => {
    console.log("After waiting ", timeout/1000, " seconds, I'm printing ", arg1, arg2);
    callback(null, arg1 + "..." + arg2); // callback(error, data);
  }, timeout);
}

// ================================================
// ====== Exercise: Implement the missing code here
const promised = promisify(standardNodeFn);

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      })

    })
  }
}
// ====== /Exercise
// ================================================

promised("my arg 1", "my arg 2").then((result) => {
  // success!
  console.log("result: ", result);
}).catch((error) => {
  // failure!
  console.error(error);
})

