function Bear(type) {
  this.type = type;
  // this.growl = function() {
  //   console.log("grrr I'm a " + this.type + " bear!");
  // }
}

/*
  These are objects too.
  They are prototypes of Bear (which is also an object)
*/
var grizzly = new Bear('grizzly');
var polar = new Bear('polar');

// Prototype is what allows us to share data across child objects of the parnet Bear object
Bear.prototype.growl = function() {
  console.log("grrr I'm a " + this.type + " bear!");
}

console.log(grizzly, polar);

grizzly.growl();
polar.growl();


// Using the prototype chain
function Grizzly() {
  Bear.call(this, 'grizzly');
}
Grizzly.prototype = Object.create(Bear.prototype);

grizzly = new Grizzly();
