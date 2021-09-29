function x() {
  for (var i = 0; i < 5; i++) { // can change to let
    // const temp = i;
    setTimeout(function() {
      console.log(temp);
    }, i * 1000);
  }

  console.log("Start");
}
x();
