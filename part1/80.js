const obj1 = {
  key1: "value1",
  key2: "value2",
};

// __proto__

// offical ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]

// prototype

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2.__proto__, "dadfaf");

console.log(obj2.__proto__);

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");

john.sayHello(); // Hello, my name is John
