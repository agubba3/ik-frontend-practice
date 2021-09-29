function myFunction() {
  console.log(this);
}

// 1. Simple invocation
myFunction(); // Logs global object as it's being called from global context

const myObject = {
  property: "hello",
  method() {
    console.log(this);
  }
};
// 2. Method invocation
myObject.method(); // Logs myObject as it's being called on an object (the object is the caller)


// 3. Indirect invocation
const myContext = { value: 'A' };

myFunction.call(myContext);  // Logs { value: 'A' } as we are explicitely passing in context that "this" is referencing
myFunction.apply(myContext); // Logs { value: 'A' } as we are explicitely passing in context that "this" is referencing

// 4. Constructor invocation
new myFunction(); // Logs an instance of MyFunction. new is special
