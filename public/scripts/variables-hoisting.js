function greeting() {
  console.log(greetingStrLetBefore);
  console.log(greetingStrVar);
  console.log(greetingStrLetAfter);
}

// JS is not compiled.
let greetingStrLetBefore = "Hola world";
greeting();

var greetingStrVar = "Hello World";
let greetingStrLetAfter = "Hi world";
