//bind

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
  firstName: "harshit",
  age: 8,
};
const user2 = {
  firstName: "mohit",
  age: 9,
};

// apply
about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };
greet.call(person, "Hello", "!"); // Hello, Alice!
