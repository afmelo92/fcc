function Animal() {}


function Bird(name, color) {
  this.name = name;
  this.color = color;
}

Bird.prototype = {
  // Only change code below this line
  constructor: Bird,
  numLegs: 2,
  eat: () => {
    console.log("munch munch munch");
  },
  describe: () => {
    console.log('My name is ' + this.name)
  }
};

let canary = new Bird("Tweety", "Red");
let ownProps = [];
let prototypeProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// console.log(ownProps); // prints ["name"]
// console.log(prototypeProps); // prints ["numLegs"]
// console.log(canary.eat())
// console.log(canary.color)
// console.log(Bird.prototype.isPrototypeOf(canary))


let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.cute = function() {
        console.log("Gliding on the water");
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("I'm singing in the rain!");
      };
    }
  }
})();

funModule.singMixin(canary);
canary.eat();