var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}


const myObject = {
  id: 42,
  myMethod(items) {
    console.log(this); // logs myObject
    const callbackArrow = () => {
      console.log("Arrow: ", this, this.id); // logs myObject
    };
    const callbackDefault = function() {
      console.log("Default: ", this, this.id);
    };
    items.forEach(callbackArrow);
    items.forEach(callbackDefault);
  }
};

myObject.myMethod([1, 2, 3]);