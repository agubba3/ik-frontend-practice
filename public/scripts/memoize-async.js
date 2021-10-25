function memo(originalFunction) {
  const cache = {};
  return async (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Cache hit");
      return cache[key];
    }
    const result = await originalFunction(...args);
    cache[key] = result;
    return result;
  }
}

const getData = (url, shouldDelay) => {
  return new Promise((resolve, reject) => {
    if (shouldDelay) {
      setTimeout(() => resolve(`Data from ${url}`), 3000);
    } else {
      resolve(`Data from ${url}`);
    }
  })
}
const memoizedGetData = memo(getData);

const test = async () => {
  console.log(await memoizedGetData('https://amazon.com', false));
  console.log("After first call");
  console.log(await memoizedGetData('https://amazon.com', false));
  console.log("After second call");
  console.log(await memoizedGetData('https://amazon.com', false));
  console.log("After third call");
};

test();
console.log("After test");
