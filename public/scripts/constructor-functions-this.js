function Cat(name, color) {
  this.name = name; this.color = color; 
} 
 
var catA = new Cat("Fluffy", "White");
console.log("CatA: ", catA);

var catB = Cat("Fluffy", "White");
console.log("CatB: ", catB);
