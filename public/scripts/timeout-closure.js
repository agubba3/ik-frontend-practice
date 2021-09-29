function x() {
  for (let i = 0; i < 5; i++) { // try using var here instead. The code will behave as intended.
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }

  console.log("Start");
}
x();
